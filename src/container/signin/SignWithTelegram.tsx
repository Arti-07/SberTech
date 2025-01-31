// import React, { useState } from 'react';
// import api from '../../api';
// import { useNavigate } from 'react-router-dom';
// import { Container, Input, Button, Message } from './components/SignWithTelegramStyles';
//
// const SignWithTelegram = () => {
//     const [username, setUsername] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();
//
//     const handleSendTelegramMessage = async () => {
//         try {
//             const response = await api.sendCode(username);
//             console.log('Ответ сервера:', response);
//
//             if (response.code) {
//                 setMessage(`Код отправлен: ${response.code}`);
//             } else {
//                 setMessage('Код успешно отправлен в Telegram!');
//             }
//         } catch (error) {
//             console.error('Ошибка при отправке запроса:', error);
//             setMessage('Не удалось отправить код.');
//         }
//     };
//
//     const handleLogin = async () => {
//         try {
//             const response = await api.loginWithCode(username, verificationCode);
//             console.log('Ответ сервера:', response);
//
//             if (response.message === 'Logged in successfully') {
//                 setMessage('Вы успешно вошли в систему!');
//                 sessionStorage.setItem('login', username);
//                 window.dispatchEvent(new Event('loginChanged'));
//                 navigate('/smartini_crypto/userspage');
//             } else {
//                 setMessage('Неверный код или логин.');
//             }
//         } catch (error) {
//             console.error('Ошибка при входе:', error);
//             setMessage('Ошибка при входе. Проверьте данные.');
//         }
//     };
//
//     return (
//         <Container>
//             <h1>Вход через Telegram</h1>
//             <Input
//                 type="text"
//                 placeholder="Введите логин"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <Button onClick={handleSendTelegramMessage}>Отправить код в Telegram</Button>
//
//             <Input
//                 type="text"
//                 placeholder="Введите код подтверждения"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//             />
//             <Button onClick={handleLogin}>Войти в личный кабинет</Button>
//
//             {message && <Message>{message}</Message>}
//         </Container>
//     );
// };
//
// export default SignWithTelegram;
//


import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Button, Message, ModalOverlay, ModalContent } from './components/SignWithTelegramStyles';
import { useTheme } from '@mui/material/styles';  // Импортируем хук useTheme
import confettiAnimation from '../../assets/lotties/confetti.json';

const SignWithTelegram = () => {
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
    const navigate = useNavigate();
    const theme = useTheme();  // Получаем текущую тему
    const [qrImage, setQrImage] = useState("");  // Состояние для хранения пути к изображению QR-кода

    // Функция для установки QR-кода в зависимости от темы
    useEffect(() => {
        if (theme.palette.mode === 'dark') {
            setQrImage(require("../../assets/images/bot_tg_black.jpg"));
        } else {
            setQrImage(require("../../assets/images/bot_tg_white.jpg"));
        }
    }, [theme]);  // Перезапускаем при изменении темы

    // const handleSendTelegramMessage = async () => {
    //     try {
    //         const response = await api.sendCode(username);
    //         console.log('Ответ сервера:', response);
    //
    //         if (response.code) {
    //             setMessage(`Код отправлен: ${response.code}`);
    //         } else {
    //             setMessage('Код успешно отправлен в Telegram!');
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при отправке запроса:', error);
    //         setMessage('Не удалось отправить код.');
    //     }
    // };

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

    // Функция для открытия модального окна
    const openQRModal = () => {
        setIsModalOpen(true);
    };

    // Функция для закрытия модального окна
    const closeQRModal = () => {
        setIsModalOpen(false);
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

            {/* Кнопка для открытия модального окна с QR-кодом */}
            <Button onClick={openQRModal}>Получить QR-код для Telegram</Button>

            {message && <Message>{message}</Message>}

            {/* Модальное окно для QR-кода */}
            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <h2>QR-код для перехода в Telegram</h2>
                        <img
                            src={qrImage}  // Используем динамическое изображение в зависимости от темы
                            alt="QR-код Telegram"
                            style={{ width: '200px', height: '200px' }}
                        />
                        <Button onClick={closeQRModal}>Закрыть</Button>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default SignWithTelegram;
