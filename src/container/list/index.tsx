import React from 'react';
import Favorites from './components/Favorites';
import CryptoTable from './components/CryptoTable';

const ListPage = (): React.ReactElement => {
    return (
        <div style={{ padding: '20px' }}>
            <Favorites />
            <CryptoTable />
        </div>
    );
};

export default ListPage;