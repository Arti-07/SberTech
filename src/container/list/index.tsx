import React from 'react';
import Favorites from './components/card/Favorites';
import CryptoTable from './components/table/CryptoTable';

const ListPage = (): React.ReactElement => {
    return (
        <div style={{ padding: '20px' }}>
            <Favorites />
            <CryptoTable />
        </div>
    );
};

export default ListPage;