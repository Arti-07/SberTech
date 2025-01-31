import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
`;


export const ModalContainer = styled.div`
    background: ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ffffff')};
    padding: 20px;
    border-radius: 12px;
    width: 400px;
    max-width: 100%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;


export const ModalHeader = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
    color: ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#ecf0f1' : '#333333')};
`;

export const Input = styled.input`
    padding: 12px;
    border: 1px solid ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#34495e' : '#ccc')};
    border-radius: 8px;
    width: 100%;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
    }

    &:disabled {
        background: ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#95a5a6' : '#f2f2f2')};
        cursor: not-allowed;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const StyledButton = styled.button`
    background: ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#2980b9' : '#007bff')};
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 1rem;
    cursor: pointer;
    flex: 1;
    transition: background-color 0.3s;

    &:hover {
        background: ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#1abc9c' : '#0056b3')};
    }

    &:disabled {
        background: ${({ theme }: { theme: Theme }) => (theme.palette.mode === 'dark' ? '#95a5a6' : '#ccc')};
        cursor: not-allowed;
    }
`;
