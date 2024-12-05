import React, { useEffect, useState } from 'react';

const UsersPage = () => {
    const [login, setLogin] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
    };

    useEffect(() => {
        // Проверяем наличие токена
        const token = getCookie('token');
        if (token) {
            console.log('Токен найден:', token);
            setIsAuthenticated(true);
        } else {
            console.log('Токен не найден');
            setIsAuthenticated(false);
        }

        // Также извлекаем логин
        const storedLogin = sessionStorage.getItem('login');
        if (storedLogin) {
            setLogin(storedLogin);
        }
    }, []);

    return (
        <div>
            {isAuthenticated ? (
                <h1>Привет, {login}!</h1>
            ) : (
                <h1>Вы не авторизованы. Пожалуйста, войдите.</h1>
            )}
        </div>
    );
};

export default UsersPage;
