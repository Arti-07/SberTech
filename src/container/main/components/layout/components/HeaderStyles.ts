import styled from '@emotion/styled';
import { AppBar, Button, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const NavButton = styled(Button)<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.text.secondary};
  border-radius: 20px;
  font-family: 'Verdana';
  font-weight: bold;
  text-transform: none;
  padding: 8px 16px;
  margin: 0 8px;
  background-color: #242428;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9494b3;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
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
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    background-color: #9494b3;
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

export const StyledAppBar = styled(AppBar)<{ theme: Theme }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#1E1E2A' : '#ADD8E6'};
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
  background: linear-gradient(to right, #ff7e5f, #feb47b);
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
