import React, { useState, useEffect } from 'react';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './container/main';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BackgroundContainer, ScrollableContent, BackgroundImage, GlobalStyle, ToggleButton, ToggleIcon } from './AppStyled1';

const App = () => {
    // Читаем состояние темы из localStorage, если оно есть, иначе устанавливаем в светлую
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

        // Сохраняем новое состояние темы в localStorage
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

                    {/* Кнопка переключения темы */}
                    <ToggleButton darkMode={darkMode} onClick={toggleTheme}>
                        <ToggleIcon>
                            {darkMode ? '🌞' : '🌙'}
                        </ToggleIcon>
                    </ToggleButton>
                </BackgroundContainer>
            </ThemeProvider>
        </StrictMode>
    );
};

export default App;
