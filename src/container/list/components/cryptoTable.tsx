import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../api';
import styles from './cryptoTable.style';
import Pagination from './pagination';

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
    const [data] = useState<CryptoData[]>([]);
    const [displayedData, setDisplayedData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
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
            setDisplayedData(detailedData);
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

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedData(data.slice(startIndex, endIndex));
    }, [data, page]);//

    const handlePageChange = (newPage: number) => {
        if (newPage !== page) {
            setPage(newPage);
        }
    }; //

    if (loading && page === 1) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <th style={styles.th}>#</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Price</th>
                        <th style={styles.th}>1h % Change</th>
                        <th style={styles.th}>24h % Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayedData.map((item, index) => (
                        <tr key={item.id} style={index % 2 === 0 ? styles.evenRow : {}}>
                            <td style={styles.td}>{item.id}</td>
                            <td style={styles.td}>
                                {item.icon} {item.name} ({item.symbol})
                            </td>
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
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />

        </div>
    );
};

export default CryptoTable;
