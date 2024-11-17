import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';

const Main = (): React.ReactElement => {
    return <RouterProvider router={router}/>;
};

export default Main;