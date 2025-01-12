import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: none;
`;


export const ModalContainer = styled.div`
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#2c3e50' : '#fff'};
    padding: 30px;
    border-radius: 15px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#ecf0f1' : '#ccc'};
    border-radius: 10px;
    width: 100%;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const StyledButton = styled.button`
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#007bff' : '#2F4F4F'};
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    flex: 1;
    flex-align: center;
    transition: background-color 0.3s ease;

    &:hover {
        background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#0056b3' : '#45a049'};
    }
`;