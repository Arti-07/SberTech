import React, {useState} from 'react';
import api from '../../api'

const SignupPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    //TODO поработать над стилями (emotionreact) и обработку ошибок сделать
    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            setSuccess('');
            return;
        }

        if (!birthDate) {
            setError('Введите дату рождения');
            setSuccess('');
            return;
        }

        try {
            const regResponse = await api.register(login,password,birthDate);
            if(regResponse.status === 201) // здесь надо вывести ссобщение что зареган и обработку ошибок добавить
            {
                alert('Иуу уаа Оптимус Прайм')
            }
        } catch (error) {}
    };

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Регистрация</h1>
            <div style={{marginTop: '20px', maxWidth: '400px', margin: 'auto'}}>
                {/* Поле логина */}
                <div style={{marginBottom: '20px'}}>
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
                <div style={{marginBottom: '20px'}}>
                    <label>
                        Пароль:
                        <input
                            type="password"
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
                </div>

                {/* Подтверждение пароля */}
                <div style={{marginBottom: '20px'}}>
                    <label>
                        Подтвердите пароль:
                        <input
                            type="password"
                            placeholder="Подтвердите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

                {/* Поле для даты рождения */}
                <div style={{marginBottom: '20px'}}>
                    <label>
                        Дата рождения:
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
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

                {/* Ошибка */}
                {error && (
                    <div style={{color: 'red', marginBottom: '20px'}}>{error}</div>
                )}

                {/* Успех */}
                {success && (
                    <div style={{color: 'green', marginBottom: '20px'}}>{success}</div>
                )}

                {/* Кнопка регистрации */}
                <button
                    onClick={handleSignup}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28A745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
