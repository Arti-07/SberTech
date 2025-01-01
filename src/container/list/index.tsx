import React from 'react';
import Favorites from "./components/favorites";
import CryptoTable from './components/cryptoTable';

const ListPage = (): React.ReactElement => {
    return (
        <div style={{ padding: '20px' }}>
            <Favorites />
            <CryptoTable />
        </div>
    );
};

export default ListPage;