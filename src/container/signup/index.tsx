import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import '../../styles/animations.css';
// @ts-ignore
import gifKiss from '../../gifs/gif_kiss.gif';


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
            setError('Пароли не совпадают');
            setSuccess('');
            return;
        }

        if (!login && !password && !confirmPassword && !birthDate) {
            setError('Заполните поля');
            setSuccess('');
            return;
        }

        if (!loginRegex.test(login)) {
            setError('Логин должен быть не короче 3 символов может содержать только буквы, цифры, символы @, $, дефис и подчеркивание');
            setSuccess('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Пароль должен содержать минимум 6 символов, включая букву и цифру');
            setSuccess('');
            return;
        }

        try {
            const regResponse = await api.register(login, password, birthDate);

            if (regResponse && regResponse.message === 'User registered successfully') {
                setSuccess('Регистрация успешна! Пожалуйста, войдите.');
                setError('');
                setShowGif(true);
                setTimeout(() => setShowGif(false), 5000);
            }
            else {
                setError('Неизвестная ошибка регистрации. Попробуйте позже.');
                setSuccess('');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Пользователь с таким логином уже существует');
            } else {
                setError('Ошибка регистрации. Попробуйте позже');
            }
            setSuccess('');
        }
    };

    return (

        <div className="signup-container">
            {showGif && (
                <div className="gif-container">
                    <img src={gifKiss} alt="Успешная регистрация" className="success-gif" />
                </div>
            )}

            <h1 className="signup-title">Регистрация</h1>
            <div className="signup-form">
                {/* Поле логина */}
                <div className="form-group">
                    <label>
                        Логин:
                        <input
                            type="text"
                            placeholder="Введите логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            className="form-input"
                        />
                    </label>
                    <span className="tooltip" title="Логин должен быть не короче 3 символов, может содержать только буквы, цифры, символы @, $, дефис и подчеркивание">❓</span>
                </div>

                {/* Поле пароля */}
                <div className="form-group">
                    <label>
                        Пароль:
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />
                    </label>
                    <span className="tooltip" title="Пароль должен содержать минимум 6 символов, включая букву и цифру">❓</span>
                </div>

                {/* Поле подтверждения пароля */}
                <div className="form-group">
                    <label>
                        Подтвердите пароль:
                        <input
                            type="password"
                            placeholder="Подтвердите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-input"
                        />
                    </label>
                </div>

                {/* Поле для даты рождения */}
                <div className="form-group">
                    <label>
                        Дата рождения:
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="form-input"
                        />
                    </label>
                </div>

                {/* Ошибка или успех */}
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                {/* Кнопки */}
                <div className="button-group">
                    <button className="button button-secondary" onClick={() => navigate('/smartini_crypto/signin')}>
                        Войти
                    </button>
                    <button className="button button-primary" onClick={handleSignup}>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SignupPage;
