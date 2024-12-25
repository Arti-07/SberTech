import styled from '@emotion/styled';
import backgroundImage from './assets/images/lines.png';

export const BackgroundContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
        height: 'auto',
    },
});

export const ScrollableContent = styled('div')({
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    position: 'relative',
    zIndex: 1,
    paddingBottom: '70px',
    '@media (max-width: 768px)': {
        paddingBottom: '40px', // Уменьшаем отступ для мобильных
    },
});

export const BackgroundImage = styled('div')({
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
    '@media (max-width: 768px)': {
        backgroundSize: 'cover', // Изменяем размер фона для мобильных устройств
    },
});

export const GlobalStyle = styled('style')`
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

export const ToggleButton = styled('button')<{ darkMode: boolean }>(({ darkMode }) => ({
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
    '@media (max-width: 768px)': {
        width: '80px',  // Уменьшаем кнопку на мобильных устройствах
        height: '40px',
    },
}));

export const ToggleIcon = styled('div')({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
        width: '30px',  // Уменьшаем иконку для мобильных устройств
        height: '30px',
    },
});
