import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const FooterNavButton = styled(Button)`
    color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
    border-radius: 20px;
    font-family: 'Verdana';
    font-weight: bold;
    text-transform: none;
    padding: 6px 12px;
    margin: 0 8px;
    transition: all 0.3s ease;
    z-index: 1;
    margin-top: auto;

    &:hover {
        color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
        background-color: ${({ theme }: { theme: Theme }) => theme.palette.action.hover};
        transform: scale(1.1);
    }

    @media (max-width: 900px) {
        height: 100%;
        padding: 5px 10px;
        font-size: 14px;
        margin: 0 6px;
    }

    @media (max-width: 600px) {
        height: 100%;  
        padding: 4px 8px;
        font-size: 12px;
        margin: 0 4px;
    }

    @media (max-width: 400px) {
        height: 100%;  
        padding: 3px 6px;
        font-size: 10px;
        margin: 0 3px;
    }
`;

export const FooterContainer = styled('footer')`
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.palette.mode === 'dark' ? '#1E1E2A' : '#797993'};
  padding: 5px;
  text-align: center;
  margin-top: auto;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

    @media (max-width: 900px) {
    padding: 18px;
  }

  @media (max-width: 600px) {
    padding: 15px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const FooterText = styled(Typography)`
  font-family: 'Verdana';
  font-size: 14px;
  color: ${({ theme }: { theme: Theme }) =>
    theme.palette.mode === 'dark' ? 'white' : 'black'};
  margin-bottom: 10px;

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const ToggleButton = styled('button')<{ darkMode: boolean }>(({ darkMode }) => ({
    position: 'absolute',
    bottom: '20px',
    right: '30px',
    width: '100px',
    height: '50px',
    borderRadius: '50px',
    backgroundColor: darkMode ? '#47485A' : '#9494b3',
    display: 'flex',
    justifyContent: darkMode ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    padding: '0',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    boxSizing: 'border-box',
    zIndex: 2,

    '&:focus': {
        outline: 'none',
        boxShadow: 'none',
    },

    '@media (max-width: 900px)': {
        width: '90px',
        height: '45px',
        bottom: '15px',
        right: '15px',
    },

    '@media (max-width: 600px)': {
        width: '80px',
        height: '40px',
        bottom: '10px',
        right: '10px',
    },

    '@media (max-width: 400px)': {
        width: '70px',
        height: '35px',
        bottom: '8px',
        right: '8px',
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

    '@media (max-width: 900px)': {
        width: '35px',
        height: '35px',
    },

    '@media (max-width: 600px)': {
        width: '30px',
        height: '30px',
    },

    '@media (max-width: 400px)': {
        width: '25px',
        height: '25px',
    },
});
