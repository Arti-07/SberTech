import styled from '@emotion/styled';
import loaderAnimation from '../../../assets/lotties/loader.json';
import { Theme } from '@mui/material/styles';

// export const TelegramButton = styled.button`
//     background-color: #0088cc;
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 16px;
//     &:hover {
//         background-color: #0077aa;
//     }
// `;


export const TelegramButton = styled.button<{ theme?: Theme }>`
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

    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.9rem;
    }
`;


export const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const Container = styled.div<{ theme?: Theme }>`
    text-align: center;
    margin-top: 50px;
    
    @media (max-width: 600px) {
        margin-top: 30px;
    }
`;

export const Title = styled.h1<{ theme?: Theme }>`
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.palette.text.primary}; 
    
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const InputGroup = styled.div<{ theme?: Theme }>`
    margin-top: 30px !important; 
    margin-bottom: 50px !important;
    max-width: 400px;
    margin: 0 auto;
    position: relative; 
    text-align: left;
    
    @media (max-width: 600px) {
        max-width: 300px;
    }
`;

export const InputField = styled.input<{ theme?: Theme }>`
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
    
    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

export const PasswordToggle = styled.span<{ theme?: Theme }>`
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
    
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Message = styled.div<{ isSuccess: boolean; theme?: Theme }>`
    color: ${(props) =>
    props.isSuccess
        ? props.theme.palette.success.main
        : props.theme.palette.error.main};
    margin-bottom: 20px;
    font-weight: bold;
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

export const ErrorMessage = styled.span<{ theme?: Theme }>`
    animation: shake 0.5s ease-in-out;
    color: ${(props: { theme: Theme }) => props.theme.palette.error.main};
    font-weight: bold;
    text-align: center;
    position: absolute; 
    top: 100%; 
    left: 0;
    width: 100%;
    display: block;
    
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
    }
`;

export const SignInButton = styled.button<{ theme?: Theme }>`
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
    
    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.9rem;
    }
`;

export const SignUpButton = styled.button<{ theme?: Theme }>`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;

    &:hover {
        background-color: ${(props) => props.theme.palette.secondary.dark};
    }
    
    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.9rem;
    }
`;

export const ButtonGroup = styled.div<{ theme?: Theme }>`
    display: flex;
    justify-content: center;
    gap: 20px; 
    margin-top: 20px;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 10px; 
    }
`;

