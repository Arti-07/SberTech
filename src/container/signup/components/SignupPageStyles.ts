import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

// Контейнер для GIF
export const GifContainer = styled.div`
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
        width: 100%; /* Для мобильных устройств контент занимает 100% ширины */
    }
`;

// Сообщение об успешной операции
export const SuccessMessage = styled.div`
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
        font-size: 1.1rem; /* Уменьшаем шрифт для мобильных устройств */
        margin-top: 0; /* Убираем дополнительный отступ */
    }
`;

// Сообщение об ошибке
export const ErrorMessage = styled.div`
    animation: shake 0.5s ease-in-out;
    color: ${(props: { theme: Theme }) => props.theme.palette.error.main};
    font-weight: bold;
    margin-top: -5px;
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
        font-size: 1.1rem; /* Уменьшаем шрифт для мобильных устройств */
        margin-top: 0; /* Убираем дополнительный отступ */
    }
`;

// Контейнер для формы регистрации
export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px 20px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        max-width: 90%; /* Для мобильных устройств форма занимает больше ширины */
        padding: 10px 15px; /* Уменьшаем отступы */
    }

    @media (max-width: 480px) {
        max-width: 100%; /* Форма занимает 100% ширины для самых маленьких экранов */
    }
`;

// Заголовок формы
export const SignupTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-align: center;
    color: ${(props: { theme: Theme }) => props.theme.palette.text.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.1);
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;

    &:hover {
        text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 768px) {
        font-size: 2rem; /* Уменьшаем размер шрифта для мобильных устройств */
    }

    @media (max-width: 480px) {
        font-size: 1.5rem; /* Ещё меньше для самых маленьких экранов */
    }
`;

// Группа полей ввода
export const FormGroup = styled.div`
    margin-bottom: 10px;
    position: relative;

    @media (max-width: 768px) {
        margin-bottom: 8px; /* Уменьшаем отступы на мобильных */
    }
`;

// Поля ввода
export const FormInput = styled.input`
    padding: 12px;
    margin-top: 5px;
    font-size: 1rem;
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${(props: { theme: Theme }) => props.theme.palette.text.primary};
    background-color: ${(props: { theme: Theme }) => props.theme.palette.background.paper};
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

// Tooltip (всплывающее сообщение)
export const Tooltip = styled.span`
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-20%);
    cursor: pointer;
    font-size: 1.5rem;
    color: ${(props: { theme: Theme }) => props.theme.palette.primary.main};
    transition: color 0.3s ease;

    &:hover {
        color: ${(props: { theme: Theme }) => props.theme.palette.primary.dark};
    }

    @media (max-width: 768px) {
        font-size: 1.2rem; /* Уменьшаем шрифт на мобильных устройствах */
    }
`;

// Группа кнопок
export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column; /* Для мобильных кнопки становятся в колонку */
        gap: 8px; /* Уменьшаем расстояние между кнопками */
    }
`;

// Кнопки
export const Button = styled.button`
    padding: 12px 25px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.button-primary {
        background-color: ${(props: { theme: Theme }) => props.theme.palette.primary.main};
        color: white;

        &:hover {
            background-color: ${(props: { theme: Theme }) => props.theme.palette.primary.dark};
        }
    }

    &.button-secondary {
        background-color: ${(props: { theme: Theme }) => props.theme.palette.secondary.main};
        color: white;

        &:hover {
            background-color: ${(props: { theme: Theme }) => props.theme.palette.secondary.dark};
        }
    }

    @media (max-width: 768px) {
        padding: 10px 20px; /* Уменьшаем отступы на мобильных устройствах */
        font-size: 0.9rem; /* Уменьшаем размер шрифта */
    }

    @media (max-width: 480px) {
        padding: 8px 16px; /* Уменьшаем ещё больше для маленьких экранов */
        font-size: 0.8rem; /* Минимальный размер шрифта */
    }
`;
