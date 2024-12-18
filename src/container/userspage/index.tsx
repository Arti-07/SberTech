import React, { useEffect, useState } from 'react';
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
    const [login, setLogin] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(0);
    const [showTopUp, setShowTopUp] = useState<boolean>(false);
    const [topUpAmount, setTopUpAmount] = useState<string>('');

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

    return (
        <PageContainer>
            {isAuthenticated ? (
                <UserInfo>
                    <Title>Hello, {login}!</Title>
                    <BalanceText>Your balance: {balance}</BalanceText>
                    {!showTopUp && (
                        <StyledButton onClick={handleTopUpClick}>Top up balance</StyledButton>
                    )}
                    {showTopUp && (
                        <TopUpContainer>
                            <AmountInput
                                type="number"
                                placeholder="Enter the amount of money"
                                value={topUpAmount}
                                onChange={(e) => setTopUpAmount(e.target.value)}
                            />
                            <StyledButton onClick={handleConfirmTopUp}>Submit</StyledButton>
                        </TopUpContainer>
                    )}
                </UserInfo>
            ) : (
                <Title>You are not logged in. Please come in.</Title>
            )}
        </PageContainer>
    );
};

export default UsersPage;
