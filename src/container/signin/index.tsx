import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const SignInPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();  // Хук для навигации

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

            //document.cookie = `token=${token}; path=/; Secure; SameSite=Strict;`;
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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Вход в личный кабинет</h1>
            <div style={{ marginTop: '20px', maxWidth: '400px', margin: 'auto' }}>
                {/* Поле логина */}
                <div style={{ marginBottom: '20px' }}>
                    <label>
                        Логин:
                        <input
                            type="text"
                            placeholder="Введите логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginTop: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                    </label>
                </div>

                {/* Поле пароля */}
                <div style={{ marginBottom: '20px', position: 'relative' }}>
                    <label>
                        Пароль:
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginTop: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                    </label>

                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{
                            position: 'absolute',
                            top: '70%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                        }}
                    >
                        {showPassword ? '👁️' : '🙈'}
                    </span>
                </div>

                {/* Сообщение */}
                {message && (
                    <div
                        style={{
                            color: message === 'Вход выполнен!' ? 'green' : 'red',
                            marginBottom: '20px',
                        }}
                    >
                        {message}
                    </div>
                )}

                {/* Кнопка входа */}
                <button
                    onClick={handleSignIn}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Войти
                </button>
            </div>
        </div>
    );
};

export default SignInPage;
