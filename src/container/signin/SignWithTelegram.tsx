import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Button, Message } from './components/SignWithTelegramStyles';

const SignWithTelegram = () => {
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSendTelegramMessage = async () => {
        try {
            const response = await api.sendCode(username);
            console.log('Ответ сервера:', response);

            if (response.code) {
                setMessage(`Код отправлен: ${response.code}`);
            } else {
                setMessage('Код успешно отправлен в Telegram!');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            setMessage('Не удалось отправить код.');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await api.loginWithCode(username, verificationCode);
            console.log('Ответ сервера:', response);

            if (response.message === 'Logged in successfully') {
                setMessage('Вы успешно вошли в систему!');
                sessionStorage.setItem('login', username);
                window.dispatchEvent(new Event('loginChanged'));
                navigate('/smartini_crypto/userspage');
            } else {
                setMessage('Неверный код или логин.');
            }
        } catch (error) {
            console.error('Ошибка при входе:', error);
            setMessage('Ошибка при входе. Проверьте данные.');
        }
    };

    return (
        <Container>
            <h1>Вход через Telegram</h1>
            <Input
                type="text"
                placeholder="Введите логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={handleSendTelegramMessage}>Отправить код в Telegram</Button>

            <Input
                type="text"
                placeholder="Введите код подтверждения"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
            />
            <Button onClick={handleLogin}>Войти в личный кабинет</Button>

            {message && <Message>{message}</Message>}
        </Container>
    );
};

export default SignWithTelegram;






