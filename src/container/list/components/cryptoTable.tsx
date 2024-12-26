import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../api';
import styles from './cryptoTable.style';
import Pagination from './pagination';
import { useNavigate } from 'react-router-dom';

interface CryptoData {
    id: number;
    icon: string;
    name: string;
    symbol: string;
    price: number;
    percentage_change_1h: number;
    percentage_change_24h: number;
}

const CryptoTable: React.FC = () => {
    const [data, setData] = useState<CryptoData[]>([]);
    const navigate = useNavigate();
    const [displayedData, setDisplayedData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof CryptoData; direction: string } | null>(null);
    const itemsPerPage = 10;

    const fetchCryptoData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            await api.login('Anna', 'qwerty123');
            const allCryptoData = await api.getListings();
            const startIndex = (page - 1) * itemsPerPage;
            const paginatedData = allCryptoData.slice(startIndex, startIndex + itemsPerPage);

            const detailedDataPromises = paginatedData.map(async (crypto: any) => {
                try {
                    const data = await api.getTicker(crypto.id, 'USD');
                    return {
                        id: crypto.id,
                        name: crypto.name,
                        symbol: crypto.symbol,
                        price: data?.price || 0,
                        percentage_change_1h: data?.percentage_change_1h || 0,
                        percentage_change_24h: data?.percentage_change_24h || 0,
                    };
                } catch (err: any) {
                    console.error(`Error fetching details for ${crypto.id}:`, err);
                    return {
                        id: crypto.id,
                        name: crypto.name,
                        symbol: crypto.symbol,
                        price: 0,
                        percentage_change_1h: 0,
                        percentage_change_24h: 0,
                    };
                }

            });

            const detailedData = await Promise.all(detailedDataPromises);
            const uniqueData = detailedData.reduce((acc: CryptoData[], current: CryptoData) => {
                if (!acc.some((item) => item.id === current.id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            const newDataWithSequentialId = uniqueData.map((item, index) => ({
                ...item,
                id: startIndex + index + 1,
            }));
            setDisplayedData(newDataWithSequentialId);
            setTotalPages(Math.ceil(allCryptoData.length / itemsPerPage));
        } catch (err: any) {
            setError(err?.message || 'Ошибка загрузки данных');
            console.error('Ошибка загрузки данных:', err);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchCryptoData();
    }, [fetchCryptoData]);

    const handlePageChange = (newPage: number) => {
        if (newPage !== page) {
            setPage(newPage);
        }
    };

    const handleRowClick = (name: string) => {
        navigate('/smartini_crypto/detail', { state: { cryptoName: name } });
    }

    const sortData = (key: keyof CryptoData) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });
        setData(sortedData);
        setSortConfig({ key, direction });
    };

    const filteredData = displayedData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading && page === 1) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
            />
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <th style={styles.th} onClick={() => sortData('id')}>#</th>
                        <th style={styles.th} onClick={() => sortData('name')}>Name</th>
                        <th style={styles.th} onClick={() => sortData('price')}>Price</th>
                        <th style={styles.th} onClick={() => sortData('percentage_change_1h')}>1h % Change</th>
                        <th style={styles.th} onClick={() => sortData('percentage_change_24h')}>24h % Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}
                            style={styles.tableRow}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            onClick={() => item.name && handleRowClick(item.name.toLowerCase())}>
                            <td style={styles.td}>{item.id}</td>
                            <td style={styles.td}>
                                {item.icon} {item.name} ({item.symbol})
                            </td>
                            <td style={styles.td}>{item.price.toLocaleString()} $</td>
                            <td style={styles.td}>
                                {item.percentage_change_1h > 0 ? (
                                    <span style={styles.changeUp}>▲ {item.percentage_change_1h.toFixed(2)}%</span>
                                ) : (
                                    <span
                                        style={styles.changeDown}>▼ {Math.abs(item.percentage_change_1h).toFixed(2)}%</span>
                                )}
                            </td>
                            <td style={styles.td}>
                                {item.percentage_change_24h > 0 ? (
                                    <span style={styles.changeUp}>▲ {item.percentage_change_24h.toFixed(2)}%</span>
                                ) : (
                                    <span
                                        style={styles.changeDown}>▼ {Math.abs(item.percentage_change_24h).toFixed(2)}%</span>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {loading && <p>Loading more...</p>}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />

        </div>
    );
};

export default CryptoTable;
