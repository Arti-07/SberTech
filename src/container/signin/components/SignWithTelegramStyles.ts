import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const Container = styled.div<{ theme?: Theme }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    min-height: 50vh;
    background-color: ${(props) => props.theme?.palette.background.default || '#ADD8E6'};
    color: ${(props) => props.theme?.palette.text.primary || '#000'};
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
`;

export const Input = styled.input<{ theme?: Theme }>`
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    min-width: 200px;
    border: 1px solid ${(props) => props.theme?.palette.divider || '#ccc'};
    border-radius: 25px;
    font-size: 16px;
    background-color: ${(props) => props.theme?.palette.background.paper || '#fff'};
    color: ${(props) => props.theme?.palette.text.primary || '#000'};
    box-sizing: border-box;
    flex-shrink: 0;

    &:focus {
        border-color: ${(props) => props.theme?.palette.primary.main || '#007bff'};
        outline: none;
    }
`;

export const Button = styled.button<{ theme?: Theme }>`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;
    background-color: ${(props) =>
            props.theme.palette.mode === 'dark' ? '#47485A' : '#9494B3'};

    &:hover {
        background-color: #45a049;:
    transform: translateY(-2px);


        @media (max-width: 600px) {
            width: 100%;
            font-size: 0.9rem;
        }
`;

export const Message = styled.div<{ theme?: Theme, success?: boolean }>`
    margin: 10px 0;
    color: ${(props) => (props.success ? 'green' : props.theme?.palette.error.main || 'red')};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    transition: color 0.3s ease;
`;

export const ModalOverlay = styled.div<{ theme?: Theme }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px); 
`;

export const ModalContent = styled.div<{ theme?: Theme }>`
    background-color: ${(props) =>
            props.theme?.palette.mode === 'dark' ? '#222e3c' : props.theme?.palette.background.paper || '#fff'};
    color: ${(props) => props.theme?.palette.text.primary || '#000'};
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;
`;

export const ButtonSecondary = styled.button<{ theme?: Theme }>`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;
    background-color: ${(props) =>
            props.theme.palette.mode === 'dark' ? '#47485A' : '#9494B3'};

    &:hover {
        background-color: #45a049;:
    transform: translateY(-2px);
        
        @media (max-width: 600px) {
            width: 100%;
            font-size: 0.9rem;
        }
`;
