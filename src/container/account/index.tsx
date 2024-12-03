import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт навигации


const AccountPage = (): React.ReactElement => {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Аккаунт</h1>
            <div style={{ marginTop: '20px' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/smartini_crypto/signin')} // Переход на страницу логина
                >
                    Войти
                </button>
                <button
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#28A745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/smartini_crypto/signup')}
                >
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default AccountPage;
