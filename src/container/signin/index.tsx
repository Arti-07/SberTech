// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AxiosError } from 'axios';
// import * as yup from 'yup';
// import api from '../../api';
// import Lottie from 'react-lottie';
// import {
//     Container,
//     Title,
//     InputGroup,
//     InputField,
//     PasswordToggle,
//     Message,
//     SignInButton,
//     SignUpButton,
//     ButtonGroup,
//     defaultOptions,
//     ErrorMessage,
//     TelegramButton,
// } from './components/SignInPageStyles';
//
// const SignInPage = (): React.ReactElement => {
//     const [login, setLogin] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState<Record<string, string>>({});
//     const [message, setMessage] = useState('');
//     const [setLoading, setSetLoading] = useState(false);
//
//     const navigate = useNavigate();
//
//     const validationSchema = yup.object().shape({
//         login: yup
//             .string()
//             .required('Login is required')
//             .matches(
//                 /^[A-Za-z0-9@$_-]{3,}$/,
//                 'Login must be at least 3 characters and can include letters, numbers, @, $, -, and _.'
//             ),
//         password: yup
//             .string()
//             .required('Password is required')
//             .matches(
//                 /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
//                 'Password must be at least 6 characters and include at least one letter and one number.'
//             ),
//     });
//
//     const handleSignIn = async () => {
//         setMessage('');
//         setErrors({});
//         setSetLoading(true);
//
//         try {
//             await validationSchema.validate(
//                 { login, password },
//                 { abortEarly: false }
//             );
//
//             await api.login(login, password);
//             sessionStorage.setItem('login', login);
//             window.dispatchEvent(new Event('loginChanged'));
//             navigate('/smartini_crypto/userspage');
//         } catch (error) {
//             if (error instanceof yup.ValidationError) {
//                 const validationErrors: Record<string, string> = {};
//                 error.inner.forEach((err) => {
//                     if (err.path) validationErrors[err.path] = err.message;
//                 });
//                 setErrors(validationErrors);
//             } else if ((error as AxiosError).response) {
//                 const status = (error as AxiosError).response?.status;
//                 if (status === 401 || status === 400) {
//                     setMessage('Incorrect login or password');
//                 } else {
//                     setMessage(`Error occurred. Error code: ${status}`);
//                 }
//             } else if ((error as AxiosError).message === 'Network Error') {
//                 setMessage('Check your internet connection and try again.');
//             } else {
//                 setMessage('An unknown error occurred. Try again later.');
//             }
//             setSetLoading(false);
//         }
//     };
//
//     return (
//         <Container>
//             <Title>Log in to your personal account</Title>
//             <InputGroup>
//                 <label>
//                     Login:
//                     <InputField
//                         type="text"
//                         placeholder="Enter username"
//                         value={login}
//                         onChange={(e) => setLogin(e.target.value)}
//                     />
//                 </label>
//                 {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
//             </InputGroup>
//
//             <InputGroup>
//                 <label>
//                     Password:
//                     <InputField
//                         type={showPassword ? 'text' : 'password'}
//                         placeholder="Enter password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 <PasswordToggle onClick={() => setShowPassword((prev) => !prev)}>
//                     {showPassword ? '🙉' : '🙈'}
//                 </PasswordToggle>
//                 {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
//             </InputGroup>
//
//             {setLoading && (
//                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                     <Lottie options={defaultOptions} height={100} width={100} />
//                 </div>
//             )}
//
//             {message && <Message isSuccess={message === 'Login successful!'}>{message}</Message>}
//
//             <ButtonGroup>
//                 <TelegramButton onClick={() => navigate('/smartini_crypto/signin/signwithtelegram')}>Auth with tg</TelegramButton>
//                 <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
//                 <SignUpButton onClick={() => navigate('/smartini_crypto/signup')}>Registration</SignUpButton>
//             </ButtonGroup>
//         </Container>
//     );
// };
//
// export default SignInPage;



// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import api from '../../api';
// import { useNavigate } from 'react-router-dom';
//
// const GoogleAuthButton = (): React.ReactElement => {
//     const navigate = useNavigate();
//     const handleLogin = () => {
//         api.googleAuth(); // Просто вызываем редирект
//         sessionStorage.setItem('login', login);
//         window.dispatchEvent(new Event('loginChanged'));
//         navigate('/smartini_crypto/userspage');
//     };
//
//     return (
//         <div>
//             <button onClick={handleLogin}>Войти через Google</button>
//         </div>
//     );
// };
//
// export default GoogleAuthButton;
//
//
//
// import React from 'react';
// import api from '../../api';
// import { useNavigate } from 'react-router-dom';
//
// const GoogleAuthButton = (): React.ReactElement => {
//     const navigate = useNavigate();
//
//     const handleLogin = () => {
//         api.googleAuth(); // Просто вызываем редирект
//
//         const storedUser = sessionStorage.getItem('login'); // Получаем сохранённый логин
//         if (storedUser) {
//             sessionStorage.setItem('login', storedUser);
//             window.dispatchEvent(new Event('loginChanged'));
//             navigate('/smartini_crypto/userspage');
//         }
//     };
//
//     return (
//         <div>
//             <button onClick={handleLogin}>Войти через Google</button>
//         </div>
//     );
// };
//
// export default GoogleAuthButton;


import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../api';

const GoogleAuthButton = (): React.ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token'); // Ищем токен в URL

        // Сохраняем токен в localStorage
        if (token) {
            localStorage.setItem('token', token); // Сохраняем токен в localStorage
            window.dispatchEvent(new Event('loginChanged'));
            navigate('/userspage');
        }
        else {
            console.error('Ошибка аутентификации: токен не найден');
        }
    }, [location, navigate]);

    const handleLogin = async () => {
        try {
            // Редиректим на сервер для Google OAuth
            await api.googleAuth(); // Сервер перенаправляет на Google
        } catch (error) {
            console.error('Ошибка авторизации через Google', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Войти через Google</button>
        </div>
    );
};

export default GoogleAuthButton;
