import React, { useState } from 'react';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './container/main';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BackgroundContainer, ScrollableContent, BackgroundImage, GlobalStyle } from './AppStyled1';
import Footer from './container/main/components/layout/footer/footer';

const App = () => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(storedDarkMode);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#1E1E2A' : '#ADD8E6',
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
                <CssBaseline />
                <GlobalStyle />
                <BackgroundContainer>
                    <BackgroundImage />
                    <ScrollableContent>
                        <Main />
                    </ScrollableContent>
                    <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
                </BackgroundContainer>
            </ThemeProvider>
        </StrictMode>
    );
};

export default App;
