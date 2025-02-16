import React, {useState} from 'react';
import {StrictMode} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './container/main';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {BackgroundContainer, ScrollableContent, BackgroundImage, GlobalStyle} from './AppStyled';
import Footer from './container/main/components/layout/footer/Footer';
import {ToastContainer} from 'react-toastify';

const App = () => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(storedDarkMode);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#1E1E2A' : '#797993',
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    html: {
                        height: '100%',
                    },
                    '#app': {
                        height: '100%',
                    },
                    body: {
                        height: '100%',
                        backgroundImage: darkMode
                            ? 'linear-gradient(to right top, #292934, #424251, #5c5c6f, #77778f, #9494b1);'
                            : 'linear-gradient(to right top, #9494b1, #afaec4, #c9c8d7, #e4e3eb, #ffffff);',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    },
                },
            },
        },
    });

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyle/>
                <BackgroundContainer>
                    <BackgroundImage/>
                    <ScrollableContent>
                        <Main/>
                        <Footer darkMode={darkMode} toggleTheme={toggleTheme}/>
                    </ScrollableContent>
                </BackgroundContainer>
            </ThemeProvider>
            <ToastContainer/>
        </StrictMode>
    );
};

export default App;
