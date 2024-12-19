import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const PageContainer = styled.div<{ theme: Theme }>`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => (theme.palette.mode === 'light' ? 'black' : 'white')};
`;

export const Title = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) => (theme.palette.mode === 'light' ? 'black' : 'red')};
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button<{ theme: Theme }>`
  padding: 12px 24px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'light' ? '#007BFF' : '#444'};
  color: ${({ theme }) => (theme.palette.mode === 'light' ? '#fff' : '#ccc')};
`;
