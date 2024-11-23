import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import ListPage from '../list';
import DetailPage from '../detail';
import MiningPage from "../mining";
import {getNavigationsValue} from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
    {
        path: getNavigationsValue('smartini_crypto.main'),
        element: <Layout/>,
        children: [
            {
                path: getNavigationsValue('smartini_crypto.main'),
                element: <ListPage/>
            },
            {
                path: getNavigationsValue('smartini_crypto.detail'),
                element: <DetailPage/>
            },
            {
                path: getNavigationsValue('smartini_crypto.mining'),
                element: <MiningPage/>
            },
        ]
    }
]);