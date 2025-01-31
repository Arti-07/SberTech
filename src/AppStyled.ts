import styled from '@emotion/styled';
import backgroundImage from './assets/images/lines.png';

export const BackgroundContainer = styled('div')({
    height:'100%',
    position: 'relative',
    overflow: 'hidden',
});

export const ScrollableContent = styled('div')({
    flex: '1',
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
});

export const BackgroundImage = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: 'zoomEffect 30s infinite ease-in-out',
    zIndex: -1,
    '@media (max-width: 768px)': {
        backgroundSize: 'cover',
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
