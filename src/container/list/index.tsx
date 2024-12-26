import React from 'react';
import Favorites from "./components/favorites";
import CryptoTable from './components/cryptoTable';

const ListPage = (): React.ReactElement => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Favorites</h1>
            <Favorites />
            <CryptoTable />
        </div>
    );
};

export default ListPage;