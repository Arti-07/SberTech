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
    font-family: 'Verdana', sans-serif;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1024px) {
        width: 250px;
        padding: 18px;
    }

    @media (max-width: 768px) {
        width: 220px;
        padding: 16px;
    }

    @media (max-width: 480px) {
        width: 180px; 
        padding: 12px;
    }
`;

export const Message = styled.p<{ theme: Theme }>`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 20px;

    @media (max-width: 1024px) {
        font-size: 16px; 
        margin-bottom: 15px; 
    }

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 12px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button<{ theme: Theme }>`
    padding: 12px 25px;
    font-size: 16px;
    width: 60%;
    font-weight: 600;
    color: white;
    background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#47485A' : '#9494b3')};
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }

    & + & {
        margin-top: 15px;
    }

    @media (max-width: 1024px) {
        padding: 10px 20px;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 10px;
    }
`;
