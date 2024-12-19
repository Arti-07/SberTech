import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const FooterNavButton = styled(Button)<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.text.secondary};
  border-radius: 20px;
  font-family: 'Verdana';
  font-weight: bold;
  text-transform: none;
  padding: 6px 12px;
  margin: 0 8px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.action.hover};
    transform: scale(1.1);
  }
`;

export const FooterContainer = styled('footer')<{ theme: Theme }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#1E1E2A' : '#ADD8E6'};
  padding: 20px;
  text-align: center;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const FooterText = styled(Typography)<{ theme: Theme }>`
  font-family: 'Verdana';
  font-size: 14px;
  color: ${({ theme }) => (theme.palette.mode === 'dark' ? 'white' : 'black')};
  margin-bottom: 10px;
`;
