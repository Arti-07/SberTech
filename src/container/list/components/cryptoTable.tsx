import React, { useState } from 'react';
import styles from './cryptoTable.style';

interface CryptoData {
    id: number;
    icon: string;
    name: string;
    symbol: string;
    price: number;
    change: number;
}

const testData: CryptoData[] = [
    { id: 1, icon: '', name: 'Bitcoin', symbol: 'BTC', price: 10667735.83, change: 0.84 },
    { id: 2, icon: '', name: 'Ethereum', symbol: 'ETH', price: 403682.33, change: -0.27 },
    { id: 3, icon: '', name: 'Tether', symbol: 'USDT', price: 103.35, change: -1.05 },
    { id: 4, icon: '', name: 'Solana', symbol: 'SOL', price: 22940.66, change: 0.93 },
    { id: 5, icon: '', name: 'Dogecoin', symbol: 'DOGE', price: 41.68, change: 1.94 },
];

const CryptoTable: React.FC = () => {
    const [data, setData] = useState<CryptoData[]>(testData);
    const [sortConfig, setSortConfig] = useState<{ key: keyof CryptoData; direction: string } | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

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

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
            />
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th} onClick={() => sortData('id')}>#</th>
                    <th style={styles.th} onClick={() => sortData('name')}>Name</th>
                    <th style={styles.th} onClick={() => sortData('price')}>Price</th>
                    <th style={styles.th} onClick={() => sortData('change')}>Change</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item, index) => (
                    <tr key={item.id} style={index % 2 === 0 ? styles.evenRow : {}}>
                        <td style={styles.td}>{item.id}</td>
                        <td style={styles.td}>
                            {item.icon} {item.name} ({item.symbol})
                        </td>
                        <td style={styles.td}>₽{item.price.toLocaleString()}</td>
                        <td style={styles.td}>
                            {item.change > 0 ? (
                                <span style={styles.changeUp}>▲ {item.change}%</span>
                            ) : (
                                <span style={styles.changeDown}>▼ {Math.abs(item.change)}%</span>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
