import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import api from '../../api';
import Lottie from 'react-lottie';
import {
    Container,
    Title,
    InputGroup,
    InputField,
    PasswordToggle,
    Message,
    SignInButton,
    SignUpButton,
    ButtonGroup,
    defaultOptions,
} from './components/SignInPageStyles';

const SignInPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [showGif, setShowGif] = useState(false);

    const navigate = useNavigate();

    const handleSignIn = async () => {
        setMessage('');
        setShowGif(true);

        const validationMessages = {
            noLoginAndPassword: 'Введите логин и пароль',
            noLogin: 'Введите логин',
            noPassword: 'Введите пароль',
        };

        if (!login && !password) {
            setMessage(validationMessages.noLoginAndPassword);
            setShowGif(false);
            return;
        }

        if (!login) {
            setMessage(validationMessages.noLogin);
            setShowGif(false);
            return;
        }

        if (!password) {
            setMessage(validationMessages.noPassword);
            setShowGif(false);
            return;
        }

        try {
            await api.login(login, password);
            sessionStorage.setItem('login', login);
            window.dispatchEvent(new Event('loginChanged'));
            navigate('/smartini_crypto/userspage');
        } catch (error: unknown) {
            console.error('Ошибка:', error);

            if ((error as AxiosError).response) {
                const status = (error as AxiosError).response?.status;
                if (status === 401 || status === 400) {
                    setMessage('Неверный логин или пароль');
                } else {
                    setMessage(`Произошла ошибка. Код ошибки: ${status}`);
                }
            } else if ((error as AxiosError).message === 'Network Error') {
                setMessage('Проверьте подключение к интернету и попробуйте снова.');
            } else {
                setMessage('Произошла неизвестная ошибка. Попробуйте позже.');
            }
            setShowGif(false);
        }
    };

    return (
        <Container>
            <Title>Log in to your personal account</Title>
            <InputGroup>
                <label>
                    Login:
                    <InputField
                        type="text"
                        placeholder="Enter username"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>
            </InputGroup>

            <InputGroup>
                <label>
                    Password:
                    <InputField
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <PasswordToggle onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? '🙉' : '🙈'}
                </PasswordToggle>
            </InputGroup>

            {/* Показать анимацию, если showGif true */}
            {showGif && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Lottie options={defaultOptions} height={100} width={100} />
                </div>
            )}

            {message && <Message isSuccess={message === 'Вход выполнен!'}>{message}</Message>}

            <ButtonGroup>
                <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
                <SignUpButton onClick={() => navigate('/smartini_crypto/signup')}>Sign Up</SignUpButton>
            </ButtonGroup>
        </Container>
    );
};

export default SignInPage;
