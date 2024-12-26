import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const InputGroup = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    text-align: left;

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        max-width: 300px;
    }
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 0px;
    border: 1px solid ${(props) => props.theme.palette.text.secondary}; 
    border-radius: 25px;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.palette.background.paper}; 
    color: ${(props) => props.theme.palette.text.primary}; 

    &:focus {
        border-color: ${(props) => props.theme.palette.primary.main}; 
        outline: none;
    }

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

export const Message = styled.div<{ isSuccess: boolean }>`
    color: ${(props) =>
    props.isSuccess
        ? props.theme.palette.success.main
        : props.theme.palette.error.main}; 
    margin-top: 10px; 
`;

export const EnterButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#152525' : '#0056b3'};
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px; 

    &:hover {
        background-color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#45a049' : '#007bff'};
    }

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.9rem;
    }
`;