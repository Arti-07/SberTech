import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../api';
import styled from '@emotion/styled';

import gifKiss from '../../assets/gifs/gif_kiss.gif';

// Анимация для появления gif
const GifContainer = styled.div`
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

// Анимация для успешного сообщения
const SuccessMessage = styled.div`
    animation: slideUp 0.5s ease-in-out;
    color: #28a745;
    font-weight: bold;
    margin-top: 10px;
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
`;

// Анимация для ошибки
const ErrorMessage = styled.div`
    animation: shake 0.5s ease-in-out;
    color: #dc3545;
    font-weight: bold;
    margin-top: 10px;
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
`;

// Стилевое оформление контейнера страницы регистрации
const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`;

// Стиль для заголовка страницы с красивым шрифтом и эффектом
const SignupTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.1);
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;

    &:hover {
        text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
    }
`;


// Стиль для группы полей ввода (формы)
const FormGroup = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

// Стиль для поля ввода
const FormInput = styled.input`
    padding: 12px;
    margin-top: 5px;
    font-size: 1rem;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

// Tooltip для поля ввода
const Tooltip = styled.span`
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-20%);
    cursor: pointer;
    font-size: 1.5rem;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3;
    }
`;

// Контейнер для кнопок
const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
`;

// Базовые стили для кнопок
const Button = styled.button`
    padding: 12px 25px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.button-primary {
        background-color: #007bff;
        color: white;

        &:hover {
            background-color: #0056b3;
        }
    }

    &.button-secondary {
        background-color: #ccc;
        color: black;

        &:hover {
            background-color: #bbb;
        }
    }
`;


const SignupPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showGif, setShowGif] = useState(false);

    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const loginRegex = /^[A-Za-z0-9@$_-]{3,}$/;

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError('Passwords don\'t match');
            setSuccess('');
            return;
        }

        if (!login && !password && !confirmPassword && !birthDate) {
            setError('Fill fields');
            setSuccess('');
            return;
        }

        if (!loginRegex.test(login)) {
            setError('The login must be at least 3 characters long and can contain only letters, numbers, @, $, hyphen and underscore characters');
            setSuccess('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('The password must contain at least 6 characters, including a letter and a number');
            setSuccess('');
            return;
        }

        try {
            const regResponse = await api.register(login, password, birthDate);

            if (regResponse && regResponse.message === 'User registered successfully') {
                setSuccess('Registration is successful! Please sign in.');
                setError('');
                setShowGif(true);
                setTimeout(() => setShowGif(false), 5000);
            } else {
                setError('Unknown registration error. Try again later.');
                setSuccess('');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('A user with this username already exists');
            } else {
                setError('Registration error. Try again later');
            }
            setSuccess('');
        }
    };

    return (
        <SignupContainer>
            {showGif && (
                <GifContainer>
                    <img src={gifKiss} alt="Successful registration"/>
                </GifContainer>
            )}

            <SignupTitle>Registration</SignupTitle>
            <div className="signup-form">
                {/* Поле логина */}
                <FormGroup>
                    <label>
                        Username:
                        <FormInput
                            type="text"
                            placeholder="Enter your username"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </label>
                    <Tooltip
                        title="The login must be at least 3 characters long and can contain only letters, numbers, @, $, hyphen and underscore characters">❓</Tooltip>
                </FormGroup>

                {/* Поле пароля */}
                <FormGroup>
                    <label>
                        Password:
                        <FormInput
                            type="password"
                            placeholder="Enter the password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <Tooltip
                        title="The password must contain at least 6 characters, including a letter and a number">❓</Tooltip>
                </FormGroup>

                {/* Поле подтверждения пароля */}
                <FormGroup>
                    <label>
                        Confirm the password:
                        <FormInput
                            type="password"
                            placeholder="Confirm the password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                </FormGroup>

                {/* Поле для даты рождения */}
                <FormGroup>
                    <label>
                        Date of birth:
                        <FormInput
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </label>
                </FormGroup>

                {/* Ошибка или успех */}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <SuccessMessage>{success}</SuccessMessage>}

                {/* Кнопки */}
                <ButtonGroup>
                    <Button className="button-secondary" onClick={() => navigate('/smartini_crypto/signin')}>
                        Sign In
                    </Button>
                    <Button className="button-primary" onClick={handleSignup}>
                        Sign Up
                    </Button>
                </ButtonGroup>
            </div>
        </SignupContainer>
    );
};

export default SignupPage;
