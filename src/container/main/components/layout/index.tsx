import React from 'react';
import { Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './header';

const Layout = (): React.ReactElement => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container sx={{ flexGrow: 1 }}>
                <Box sx={{ my: 4 }}>
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
};
export default Layout;
