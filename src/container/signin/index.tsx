import React, { useState } from 'react';
import api from '../../api'

const SignInPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    //TODO поработать над стилями (emotionreact), сохранить токен в куки и обработку ошибок сделать
    const handleSignIn = async () => {
        try {
            const token = await api.login(login, password);
            alert('Успешная авторизация')

        } catch (error) {
            console.error('Ошибка:', error);
            setMessage('Произошла ошибка. Попробуйте позже.');
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
                            top: '50%',
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
