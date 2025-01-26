import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from '../list';
import DetailPage from '../detail';
import MiningPage from "../mining";
import AccountPage from "../account";
import SigninPage from "../signin";
import SignupPage from "../signup";
import UsersPage from "../userspage";
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';
import NotFoundPage from "../404/NotFoundPage";
import ProtectedRoute from './ProtectedRoute';

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Error!</h1>
            <p>You dont have access.</p>
            <p>Please log in or go to the main page.</p>
        </div>
    );
};

export const router = createBrowserRouter([
    {
        path: getNavigationsValue('smartini_crypto.main'),
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: getNavigationsValue('smartini_crypto.main'),
                element: (
                    <ProtectedRoute>
                        <ListPage />
                    </ProtectedRoute>
                )
            },
            {
                path: getNavigationsValue('smartini_crypto.signin'),
                element: <SigninPage />
            },
            {
                path: getNavigationsValue('smartini_crypto.signup'),
                element: <SignupPage />
            },
            {
                path: getNavigationsValue('smartini_crypto.account'),
                element: <AccountPage />
            },
            {
                //path: `${getNavigationsValue('smartini_crypto.detail')}/:cryptoName`,
                path: getNavigationsValue('smartini_crypto.detail'),
                element: (
                    <ProtectedRoute>
                        <DetailPage />
                    </ProtectedRoute>
                )
            },
            {
                path: getNavigationsValue('smartini_crypto.mining'),
                element: (
                    <ProtectedRoute>
                        <MiningPage />
                    </ProtectedRoute>
                )
            },
            {
                path: getNavigationsValue('smartini_crypto.userspage'),
                element: (
                    <ProtectedRoute>
                        <UsersPage />
                    </ProtectedRoute>
                )
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;



