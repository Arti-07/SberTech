import React from 'react';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Main from './container/main';

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
        <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
        </ThemeProvider>
        </StrictMode>
    );
};

export default App;
