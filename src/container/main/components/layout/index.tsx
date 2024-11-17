import React from 'react';
import {Container, Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import Header from './header';

const Layout = (): React.ReactElement => {
    return (
        <>
            <Header/>
            <Container>
                <Box sx={{my: 4}}>
                    <Outlet/>
                </Box>
            </Container>
        </>
    );
};

export default Layout;
