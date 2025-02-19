import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#1E1E2A' : '#9494b3'};
    min-height: 30vh;
    max-width: 600px;
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
    font-family: Verdana, sans-serif;
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
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#47485A' : '#fff'};
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 4px 10px ${({ theme }: {
        theme: Theme
    }) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    text-align: center;
    font-family: Verdana, sans-serif;
    width: 100%;
    max-width: 600px;
    transition: transform 0.3s ease;
    margin-bottom: 20px;

    &:hover {
        transform: none;
    }

    @media (max-width: 768px) {
        padding: 20px;
        max-width: 90%;
    }
`;

export const BalanceText = styled.p`
    font-size: 1.5rem;
    font-family: Verdana, sans-serif;
    margin: 20px 0;
    color: #45a049;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin: 15px 0;
    }
`;

export const StyledButton = styled.button`
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? 'rgba(30, 30, 42, 0.9)' : '#9494B3'};
    font-family: Verdana, sans-serif;
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
        background-color: #45a049;
        transform: none;
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
    padding: 15px;
    border: 1px solid #ced4da;
    border-radius: 10px;
    width: 100%;
    font-size: 1.2rem;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
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

export const BalanceAmount = styled('span')(() => ({
    fontWeight: 600,
    fontSize: '1.5rem',
    color: '#03fc20',
    marginLeft: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #2a5f34, #3a6b3f)',
    borderRadius: '4px',
    padding: '2px 6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
    }
}));


