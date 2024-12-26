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
`;

export const ActiveNavButton = styled(NavButton)<{ theme: Theme }>`
  background-color: #9494b3;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    background-color: #9494b3;
  }
`;

export const StyledAppBar = styled(AppBar)<{ theme: Theme }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#1E1E2A' : '#ADD8E6'}; 
  box-shadow: none;
`;

export const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;
