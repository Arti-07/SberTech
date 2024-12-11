import React from 'react';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './container/main';
import { styled } from '@mui/material/styles';
import backgroundImage from './assets/images/lines.png';

const BackgroundContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
});

const BackgroundColor = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1E1E2A',
    zIndex: -2,
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
    animation: 'zoomEffect 30s infinite ease-in-out', // Анимация масштабирования
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
            transform: scale(1.05); /* Возврат к минимальному масштабу */
        }
    }
`;

const App = () => {
    return (
        <StrictMode>
            <CssBaseline />
            <GlobalStyle />
            <BackgroundContainer>
                <BackgroundColor />
                <BackgroundImage />
                <Main />
            </BackgroundContainer>
        </StrictMode>
    );
};

export default App;