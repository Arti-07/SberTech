import styled from '@emotion/styled';
import { AppBar, Button, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const NavButton = styled(Button)<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.text.secondary};
  border-radius: 20px;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
  text-transform: none;
  padding: 8px 16px;
  margin: 0 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9494b3;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
    margin: 0 4px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
    margin: 0 2px;
  }
`;

export const ActiveNavButton = styled(NavButton)<{ theme: Theme }>`
  background-color: #9494b3;
    
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
    margin: 0 4px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
    margin: 0 2px;
  }
`;

export const StyledAppBar = styled(AppBar)<{ theme: Theme }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#1E1E2A' : '#797993'};
  box-shadow: none;

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`;

export const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;

    &:hover {  cursor: pointer;} 
    
  @media (max-width: 768px) {
    gap: 5px;
  }

  @media (max-width: 480px) {
    gap: 3px;
  }
`;

export const LoginText = styled(Typography)<{ isLightTheme: boolean }>`
  font-family: 'Verdana';
  font-size: 16px;
  color: ${({ isLightTheme }) => (isLightTheme ? '#1E1E2A' : 'white')};
  margin-right: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow:
    1px 1px 2px rgba(0, 0, 0, 0.3),
    2px 2px 5px rgba(0, 0, 0, 0.2),
    3px 3px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 10px;
    padding: 4px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-right: 8px;
    padding: 3px;
  }
`;

export const SignOutButton = styled(NavButton)<{ theme: Theme }>`
  font-weight: bold;
  border: 2px solid  #9494B3;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 6px 12px;
  }
`;

export const LottieContainer = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 2s;

  &.visible {
    opacity: 1;
  }
`;



