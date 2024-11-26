import React from 'react';
import Popular from "./popular";

const ListPage = (): React.ReactElement => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>🔝 Top cryptocurrencies</h1>
            <Popular />
        </div>
    );
};

export default ListPage;