import styled from '@emotion/styled';
import Lottie from 'react-lottie';
import loaderAnimation from '../../../assets/lotties/loader.json';

export const Container = styled.div`
    text-align: center;
    margin-top: 50px;

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        margin-top: 30px;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.palette.text.primary}; /* Цвет текста зависит от темы */

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

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

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Message = styled.div<{ isSuccess: boolean }>`
    color: ${(props) =>
            props.isSuccess
                    ? props.theme.palette.success.main
                    : props.theme.palette.error.main};
    margin-bottom: 20px;

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
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

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.9rem;
    }
`;

export const SignUpButton = styled.button`
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

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        width: 100%;
        font-size: 0.9rem;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px; /* Расстояние между кнопками */
    margin-top: 20px;

    /* Адаптивность для экранов меньше 600px */
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 10px; /* Меньшее расстояние между кнопками */
    }
`;

export const defaultOptions = {
    loop: true,
    autoplay: true, // зациклить анимацию
    animationData: loaderAnimation, // импортированный JSON
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice', // сохранить пропорции
    },
};
