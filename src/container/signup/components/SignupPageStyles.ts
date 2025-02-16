import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import loaderAnimation from '../../../assets/lotties/loader.json';

export const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const GifContainer = styled.div<{ theme?: Theme }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        width: 100%; 
    }
`;

export const SuccessMessage = styled.div<{ theme?: Theme }>`
    animation: slideUp 0.5s ease-in-out;
    color: ${(props: { theme: Theme }) => props.theme.palette.success.main};
    font-weight: bold;
    margin-top: -5px;
    text-align: center;
    width: 100%;

    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        font-size: 1.1rem; 
        margin-top: 0; 
    }
`;

export const ErrorMessage = styled.div<{ theme?: Theme }>`
    animation: shake 0.5s ease-in-out;
    font-family: 'Verdana', sans-serif;
    color: darkred;
    font-weight: bold;
    margin-top: 2px;
    text-align: center;
    width: 100%;

    @keyframes shake {
        0% {
            transform: translateX(-5px);
        }
        25% {
            transform: translateX(5px);
        }
        50% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
        100% {
            transform: translateX(0);
        }
    }

    @media (max-width: 768px) {
        font-size: 1.1rem; 
        margin-top: 0; 
    }
`;

export const SignupContainer = styled.div<{ theme?: Theme }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px 20px;
    font-family: 'Verdana', sans-serif;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        max-width: 90%; 
        padding: 10px 15px; 
    }

    @media (max-width: 480px) {
        max-width: 100%; 
    }
`;

export const SignupTitle = styled.h1<{ theme?: Theme }>`
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-family: 'Verdana', sans-serif;
    text-align: center;
    color: ${(props: { theme: Theme }) => props.theme.palette.text.primary};
    font-weight: 600;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.1);
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;

    &:hover {
        text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 768px) {
        font-size: 2rem; 
    }

    @media (max-width: 480px) {
        font-size: 1.5rem; 
    }
`;

export const FormGroup = styled.div<{ theme?: Theme }>`
    margin-bottom: 10px;
    position: relative;

    @media (max-width: 768px) {
        margin-bottom: 8px; 
    }
`;

export const FormInput = styled.input<{ theme?: Theme }>`
    padding: 12px;
    margin-top: 5px;
    font-size: 1rem;
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${(props: { theme: Theme }) => props.theme.palette.text.primary};
    background: ${(props) => props.theme.palette.mode === 'dark' ? 'linear-gradient(to right, #1e1e2a, #9494b3)' : 'linear-gradient(to right, #9494b3, #ffffff)'            };

    box-sizing: border-box;
    transition: border-color 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    color: ${(props: { theme: Theme }) => props.theme.palette.text.primary};

    &:focus {
        border-color: ${(props: { theme: Theme }) => props.theme.palette.primary.main};
        outline: none;
    }

    &:disabled {
        background-color: ${(props: { theme: Theme }) => props.theme.palette.action.disabledBackground};
    }

    &[type='password'] {
        &::placeholder {
            color: ${(props: { theme: Theme }) => props.theme.palette.text.primary};
        }
    }

    &[type='text'] {
        &::placeholder {
            color: ${(props: { theme: Theme }) => props.theme.palette.text.primary};
        }
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 10px;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const ButtonGroup = styled.div<{ theme?: Theme }>`
    display: flex;
    gap: 20px;
    margin-top: 25px;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column; 
        gap: 8px; 
    }
`;

export const Button = styled.button<{ theme?: Theme }>`
    padding: 12px 25px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &.button-primary {
        background-color: ${(props) =>
                props.theme.palette.mode === 'dark' ? '#47485A' : '#9494B3'};
        color: white;
        &:hover {
            background-color: #45a049;
            transform: translateY(-2px);
        }
    }

    &.button-secondary {
        background-color: ${(props) =>
                props.theme.palette.mode === 'dark' ? '#47485A' : '#9494B3'};
        color: white;

        &:hover {
            background-color: lightcoral;
            transform: translateY(-2px);
        }
    }
    
    &:active {
        transform: translateY(1px);
    }

    @media (max-width: 768px) {
        padding: 10px 20px; 
        font-size: 0.9rem; 
    }

    @media (max-width: 480px) {
        padding: 8px 16px; 
        font-size: 0.8rem; 
    }
`;

export const ModalContent = styled.div<{ theme?: Theme }>`
    background-color: ${(props) =>
            props.theme?.palette.mode === 'dark' ? '#222e3c' : props.theme?.palette.background.paper || '#fff'};
    color: ${(props) => props.theme?.palette.text.primary || '#000'};
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 80%;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;
`;

export const ModalContainer = styled.div<{ theme?: Theme }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const QrImage = styled.img<{ theme?: Theme }>`
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px; 
`;
