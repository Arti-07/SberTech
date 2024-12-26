import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import api from '../../api';
import {
    PageContainer,
    Title,
    UserInfo,
    BalanceText,
    StyledButton,
    TopUpContainer,
    AmountInput,
} from './components/UsersPageStyles';

const UsersPage = () => {
    const theme = useTheme(); // Получаем тему
    const [login, setLogin] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(0);
    const [showTopUp, setShowTopUp] = useState<boolean>(false);
    const [topUpAmount, setTopUpAmount] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await api.isAuthenticated();
            setIsAuthenticated(authStatus);

            if (authStatus) {
                const storedLogin = sessionStorage.getItem('login');
                if (storedLogin) {
                    setLogin(storedLogin);
                }
                try {
                    const data = await api.getBalance();
                    setBalance(data.balance || 0);
                } catch (err) {
                    console.error('Ошибка запроса баланса:', err);
                }
            }
        };

        checkAuth();
    }, []);

    const handleTopUpClick = () => {
        setShowTopUp(true);
    };

    const handleConfirmTopUp = () => {
        const amountNumber = parseFloat(topUpAmount);
        if (isNaN(amountNumber) || amountNumber <= 0) {
            alert('Введите корректную сумму');
            return;
        }

        const previousBalance = balance;
        const updatedBalance = balance + amountNumber;
        setBalance(updatedBalance);

        api.updateBalance(amountNumber)
            .then(data => {
                if (data.balance !== undefined) {
                    setBalance(data.balance);
                    setTopUpAmount('');
                    setShowTopUp(false);
                } else if (data.error) {
                    alert(`Ошибка: ${data.error}`);
                    setBalance(previousBalance);
                }
            })
            .catch(err => {
                console.error('Ошибка запроса:', err);
                setBalance(previousBalance);
            });
    };

    const handleSignOut = () => {
        // Очистка данных из sessionStorage и обновление состояния
        sessionStorage.removeItem('login');
        setIsAuthenticated(false);
        navigate('/smartini_crypto/signin');
    };

    return (
        <PageContainer theme={theme}> {/* Тема передается через контекст */}
            {isAuthenticated ? (
                <UserInfo theme={theme}>
                    <Title theme={theme}>Hello, {login}!</Title>
                    <BalanceText theme={theme}>Your balance: {balance}</BalanceText>
                    <StyledButton theme={theme} onClick={handleSignOut}>Sign out</StyledButton>
                    {!showTopUp && (
                        <StyledButton theme={theme} onClick={handleTopUpClick}>Top up balance</StyledButton>
                    )}
                    {showTopUp && (
                        <TopUpContainer>
                            <AmountInput theme={theme}
                                type="number"
                                placeholder="Enter amount"
                                value={topUpAmount}
                                onChange={(e) => setTopUpAmount(e.target.value)}
                            />
                            <StyledButton theme={theme} onClick={handleConfirmTopUp}>Submit</StyledButton>
                        </TopUpContainer>
                    )}
                </UserInfo>
            ) : (
                <Title theme={theme}>You are not logged in. Please come in.</Title>
            )}
        </PageContainer>
    );
};

export default UsersPage;
