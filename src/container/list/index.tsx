import React from 'react';
import Favorites from "./favorites";

const ListPage = (): React.ReactElement => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Favorites</h1>
            <Favorites />
        </div>
    );
};

export default ListPage;