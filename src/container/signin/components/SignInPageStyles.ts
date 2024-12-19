import styled from '@emotion/styled';
import { useTheme, Theme } from '@mui/material/styles';

export const Container = styled.div`
    text-align: center;
    margin-top: 50px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.palette.text.primary}; /* Цвет текста зависит от темы */
`;

export const InputGroup = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    text-align: left;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
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
`;

export const PasswordToggle = styled.span`
    position: absolute;
    top: 70%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.primary.main}; 

    &:hover {
        color: ${(props) => props.theme.palette.primary.dark}; 
    }
`;

export const Message = styled.div<{ isSuccess: boolean }>`
    color: ${(props) =>
    props.isSuccess
        ? props.theme.palette.success.main 
        : props.theme.palette.error.main}; 
    margin-bottom: 20px;
`;

export const SignInButton = styled.button`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.palette.primary.main}; 
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px; 

    &:hover {
        background-color: ${(props) => props.theme.palette.primary.dark}; 
    }
`;
