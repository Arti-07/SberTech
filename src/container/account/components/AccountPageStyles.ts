import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const PageContainer = styled.div<{ theme: Theme }>`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => (theme.palette.mode === 'light' ? 'black' : 'white')};

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) => (theme.palette.mode === 'light' ? 'black' : 'red')};

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
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

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;
