import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#1E1E2A' : '#f0f8ff'};
    min-height: 30vh;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 25px;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 15px;
        max-width: 90%;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#ecf0f1' : '#333'};
    text-shadow: ${({ theme }: {
        theme: Theme
    }) => theme.palette.mode === 'dark' ? '1px 1px 3px rgba(0, 0, 0, 0.5)' : '1px 1px 3px rgba(0, 0, 0, 0.2)'};
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 15px;
    }
`;

export const UserInfo = styled.div`
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#34495e' : '#fff'};
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 4px 10px ${({ theme }: {
        theme: Theme
    }) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    text-align: center;
    width: 100%;
    max-width: 400px;
    transition: transform 0.3s ease;
    margin-bottom: 20px;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        padding: 20px;
        max-width: 90%;
    }
`;

export const BalanceText = styled.p`
    font-size: 1.5rem;
    margin: 20px 0;
    color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#3498db' : '#007bff'};
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin: 15px 0;
    }
`;

export const StyledButton = styled.button`
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#2F4F4F' : '#007bff'};
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    margin: 10px 0 8px 5px;
    box-shadow: 0 4px 10px ${({ theme }: {
        theme: Theme
    }) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#45a049' : '#0056b3'};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
`;

export const TopUpContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-top: 15px;
    }
`;

export const AmountInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#ecf0f1' : '#ccc'};
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#34495e' : '#fff'};
    color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#ecf0f1' : '#333'};
    border-radius: 20px;
    font-size: 1rem;
    width: 100px;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const WalletAddressText = styled.p`
    font-size: 1rem;
    color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#ecf0f1' : '#333'};
    word-wrap: break-word;
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;
