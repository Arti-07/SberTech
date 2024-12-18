import React, { useState } from 'react';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './container/main';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import backgroundImage from './assets/images/lines.png';

const BackgroundContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
});

const ScrollableContent = styled('div')({
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    position: 'relative',
    zIndex: 1,
    paddingBottom: '70px',
});

const BackgroundImage = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: 'zoomEffect 30s infinite ease-in-out',
    zIndex: -1,
});

const GlobalStyle = styled('style')`
    @keyframes zoomEffect {
        0% {
            transform: scale(1.05);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1.05);
        }
    }
`;

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#1E1E2A' : '#ADD8E6',
            },
        },
    });

    const toggleTheme = () => {
        setDarkMode(!darkMode);
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

                    {/* Кнопка переключения темы */}
                    <Button
                        onClick={toggleTheme}
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '20px',
                            width: '100px',
                            height: '50px',
                            borderRadius: '50px',
                            backgroundColor: darkMode ? '#333' : '#ccc',
                            display: 'flex',
                            justifyContent: darkMode ? 'flex-end' : 'flex-start',
                            alignItems: 'center',
                            padding: '0',
                            transition: 'background-color 0.3s ease',
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                transition: 'transform 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {darkMode ? '🌞' : '🌙'}
                        </div>
                    </Button>
                </BackgroundContainer>
            </ThemeProvider>
        </StrictMode>
    );
};

export default App;
