// StyledComponents.ts
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px; 
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  font-family: 'Arial', sans-serif;
  text-align: center;
  border-radius: 10px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
`;

export const Message = styled.p<{ theme: Theme }>`
  font-size: 18px; 
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 20px;
`;

export const Button = styled.button<{ theme: Theme }>`
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#2F4F4F' : '#2196F3')};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#45a049' : '#1976D2')};
  }

  & + & {
    margin-top: 15px;
  }
`;
