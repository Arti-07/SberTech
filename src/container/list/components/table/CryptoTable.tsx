import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../../api';
import { getStyles, defaultOptions } from './cryptoTable.style';
import Pagination from './Pagination';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';

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
    const [allData, setAllData] = useState<CryptoData[]>([]);
    const [displayedData, setDisplayedData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [tempSearchQuery, setTempSearchQuery] = useState<string>('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof CryptoData; direction: string } | null>(null);
    const itemsPerPage = 10;
    const navigate = useNavigate();
    const theme = useTheme();

    // Получаем стили в зависимости от темы
    const styles = getStyles(theme);

    const fetchListings = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const allCryptoData = await api.getListings();
            const uniqueData = allCryptoData.reduce((acc: CryptoData[], current: CryptoData) => {
                if (!acc.some((item) => item.id === current.id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            setAllData(uniqueData);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || 'Ошибка загрузки данных');
            } else {
                setError('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchPageData = useCallback(async (page: number, dataToFetch: CryptoData[]) => {
        setLoading(true);
        setError(null);
        try {
            const startIndex = (page - 1) * itemsPerPage;
            const paginatedData = dataToFetch.slice(startIndex, startIndex + itemsPerPage);

            const detailedDataPromises = paginatedData.map(async (crypto: CryptoData) => {
                try {
                    const data = await api.getTicker(crypto.id, 'USD');
                    return {
                        id: crypto.id,
                        icon: crypto.icon,
                        name: crypto.name,
                        symbol: crypto.symbol,
                        price: data?.price || 0,
                        percentage_change_1h: data?.percentage_change_1h || 0,
                        percentage_change_24h: data?.percentage_change_24h || 0,
                    };
                } catch (err: unknown) {
                    console.error(`Error fetching details for ${crypto.id}:`, err);
                    return {
                        id: crypto.id,
                        icon: crypto.icon,
                        name: crypto.name,
                        symbol: crypto.symbol,
                        price: 0,
                        percentage_change_1h: 0,
                        percentage_change_24h: 0,
                    };
                }
            });

            const detailedData = await Promise.all(detailedDataPromises);
            const filteredData = detailedData.filter((item) => item.price !== 0);

            if (filteredData.length < itemsPerPage) {
                const additionalData = dataToFetch.slice(startIndex + filteredData.length, startIndex + itemsPerPage);
                const additionalDetailedDataPromises = additionalData.map(async (crypto: CryptoData) => {
                    try {
                        const data = await api.getTicker(crypto.id, 'USD');
                        return {
                            id: crypto.id,
                            icon: crypto.icon,
                            name: crypto.name,
                            symbol: crypto.symbol,
                            price: data?.price || 0,
                            percentage_change_1h: data?.percentage_change_1h || 0,
                            percentage_change_24h: data?.percentage_change_24h || 0,
                        };
                    } catch (err: unknown) {
                        console.error(`Error fetching details for ${crypto.id}:`, err);
                        return {
                            id: crypto.id,
                            icon: crypto.icon,
                            name: crypto.name,
                            symbol: crypto.symbol,
                            price: 0,
                            percentage_change_1h: 0,
                            percentage_change_24h: 0,
                        };
                    }
                });

                const additionalDetailedData = await Promise.all(additionalDetailedDataPromises);
                filteredData.push(...additionalDetailedData.filter((item) => item.price !== 0));
            }

            const dataWithSequentialId = filteredData.map((item, index) => ({
                ...item,
                id: startIndex + index + 1,
            }));

            setDisplayedData(dataWithSequentialId as CryptoData[]);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || 'Ошибка загрузки данных');
            } else {
                setError('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchListings();
    }, [fetchListings]);

    useEffect(() => {
        if (allData.length > 0) {
            const filtered = allData.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
            );
            fetchPageData(page, filtered);
        }
    }, [page, allData, searchQuery, fetchPageData]);

    const handlePageChange = (newPage: number) => {
        if (newPage !== page) {
            setPage(newPage);
        }
    };

    const handleRowClick = (name: string) => {
        navigate('/smartini_crypto/detail', { state: { cryptoName: name } });
    };

    const sortData = (key: keyof CryptoData) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempSearchQuery(e.target.value);
    };

    const handleSearchInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchQuery(tempSearchQuery);
        }
    };

    if (loading && page === 1) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Lottie options={defaultOptions} height={150} width={150} />
            </div>
        );
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search..."
                value={tempSearchQuery}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchInputKeyPress}
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
                    {displayedData.map((item, index) => (
                        <tr key={item.id}
                            style={{
                                ...styles.tableRow,
                                ...(index % 2 === 0 ? styles.evenRow : {}),
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.evenRow.backgroundColor : 'transparent'}
                            onClick={() => item.name && handleRowClick(item.name.toLowerCase())}>
                            <td style={styles.td}>{item.id}</td>
                            <td style={styles.td}>{item.icon} {item.name} ({item.symbol})</td>
                            <td style={styles.td}>{item.price.toLocaleString()} $</td>
                            <td style={styles.td}>
                                {item.percentage_change_1h > 0 ? (
                                    <span style={styles.changeUp}>▲ {item.percentage_change_1h.toFixed(2)}%</span>
                                ) : (
                                    <span style={styles.changeDown}>▼ {Math.abs(item.percentage_change_1h).toFixed(2)}%</span>
                                )}
                            </td>
                            <td style={styles.td}>
                                {item.percentage_change_24h > 0 ? (
                                    <span style={styles.changeUp}>▲ {item.percentage_change_24h.toFixed(2)}%</span>
                                ) : (
                                    <span style={styles.changeDown}>▼ {Math.abs(item.percentage_change_24h).toFixed(2)}%</span>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {loading && <p>Loading more...</p>}
            </div>
            <Pagination currentPage={page} onPageChange={handlePageChange} />
        </div>
    );
};

export default CryptoTable;