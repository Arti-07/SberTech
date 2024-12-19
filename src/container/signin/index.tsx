import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import {
    Container,
    Title,
    InputGroup,
    InputField,
    PasswordToggle,
    Message,
    SignInButton,
} from './components/SignInPageStyles';

const SignInPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Хук для навигации

    const handleSignIn = async () => {
        setMessage('');

        if (!login && !password) {
            setMessage('Введите логин и пароль');
            return;
        } else if (!login) {
            setMessage('Введите логин');
            return;
        } else if (!password) {
            setMessage('Введите пароль');
            return;
        }

        try {
            await api.login(login, password);
            sessionStorage.setItem('login', login);

            navigate('/smartini_crypto/userspage');
        } catch (error: any) {
            console.error('Ошибка:', error);
            if (error.response && error.response.status === 401) {
                setMessage('Неверный логин или пароль');
            } else {
                setMessage('Произошла ошибка. Попробуйте позже.');
            }
        }
    };

    return (
        <Container>
            <Title>Log in to your personal account</Title>
            <InputGroup>
                {/* Поле логина */}
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
                {/* Поле пароля */}
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

            {/* Сообщение */}
            {message && <Message isSuccess={message === 'Вход выполнен!'}>{message}</Message>}

            {/* Кнопка входа */}
            <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
        </Container>
    );
};

export default SignInPage;
