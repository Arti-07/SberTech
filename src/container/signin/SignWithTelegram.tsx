// import React, { useState } from 'react';
// import api from '../../api';
// import styled from '@emotion/styled';
// import { useNavigate } from 'react-router-dom';
//
// const navigate = useNavigate();
//
// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     background-color: #f5f5f5;
// `;
//
// const Input = styled.input`
//     margin: 10px 0;
//     padding: 10px;
//     width: 300px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 16px;
// `;
//
// const Button = styled.button`
//     margin: 10px 0;
//     padding: 10px 20px;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     font-size: 16px;
//     cursor: pointer;
//
//     &:hover {
//         background-color: #0056b3;
//     }
// `;
//
// const Message = styled.div`
//     margin: 20px 0;
//     color: red;
//     font-size: 14px;
// `;
//
// const SignWithTelegram = () => {
//     const [username, setUsername] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');
//     const [message, setMessage] = useState('');
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
//                 // Здесь можно настроить редирект в личный кабинет
//             } else {
//                 setMessage('Неверный код или логин.');
//             }
//         } catch (error) {
//             console.error('Ошибка при входе:', error);
//             setMessage('Ошибка при входе. Проверьте данные.');
//         }
//     };
//
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



import React, { useState } from 'react';
import * as yup from 'yup';
import { Container, Input, Button, Message } from './components/SignWithTelegramStyles';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .matches(/^[A-Za-z0-9@$_-]{3,}$/, 'Логин должен содержать минимум 3 символа и состоять из букв, цифр или @, $, _, -')
        .required('Введите логин'),
    verificationCode: yup
        .string()
        .matches(/^[A-Za-z0-9]+$/, 'Код может содержать только буквы и цифры')
        .required('Введите код подтверждения'),
});

const SignWithTelegram = () => {
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const handleSendTelegramMessage = async () => {
        try {
            setErrors({});
            await validationSchema.validate({ username }, { abortEarly: false });

            const response = await api.sendCode(username);
            console.log('Ответ сервера:', response);

            if (response.code) {
                setMessage(`Код отправлен: ${response.code}`);
            } else {
                setMessage('Код успешно отправлен в Telegram!');
            }
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const validationErrors: { [key: string]: string } = {};
                err.inner.forEach((error) => {
                    if (error.path) validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            } else {
                console.error('Ошибка при отправке кода:', err);
                setMessage('Не удалось отправить код.');
            }
        }
    };

    const handleLogin = async () => {
        try {
            setErrors({});
            await validationSchema.validate({ username, verificationCode }, { abortEarly: false });

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
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const validationErrors: { [key: string]: string } = {};
                err.inner.forEach((error) => {
                    if (error.path) validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            } else {
                console.error('Ошибка при входе:', err);
                setMessage('Ошибка при входе. Проверьте данные.');
            }
        }
    };

    return (
        <Container>
            <h1>Вход через Telegram</h1>
            <div>
                <Input
                    type="text"
                    placeholder="Введите логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <Message>{errors.username}</Message>}
                <Button onClick={handleSendTelegramMessage}>Отправить код в Telegram</Button>
            </div>
            <div>
                <Input
                    type="text"
                    placeholder="Введите код"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
                {errors.verificationCode && <Message>{errors.verificationCode}</Message>}
                <Button onClick={handleLogin}>Войти в личный кабинет</Button>
            </div>
            {message && <Message>{message}</Message>}
        </Container>
    );
};

export default SignWithTelegram;
