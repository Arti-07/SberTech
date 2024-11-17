import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import AppRouter from './container/main/index';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Основной цвет
        },
        secondary: {
            main: '#dc004e', // Дополнительный цвет
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
