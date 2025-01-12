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
    AmountInput
} from './components/UsersPageStyles';
import WalletSection from './WalletSection';
import SendMoneyModal from './SendMoneyModal';

const UsersPage = () => {
    const theme = useTheme();
    const [login, setLogin] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(0);
    const [walletAddress, setWalletAddress] = useState<string>('');  // Состояние для адреса кошелька
    const [showTopUp, setShowTopUp] = useState<boolean>(false);
    const [topUpAmount, setTopUpAmount] = useState<string>('');
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);  // Состояние для видимости адреса кошелька
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

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

                    const walletData = await api.getWallet();
                    setWalletAddress(walletData.walletAddress || '');
                } catch (err) {
                    console.error('Ошибка запроса данных:', err);
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

    const handleSendMoney = async (amount: number, address: string) => {
        try {
            const response = await api.transfer(address, amount);
            if (response.error) {
                alert(`Error: ${response.error}`);
            } else {
                alert('Transfer successful');
                setBalance((prevBalance) => prevBalance - amount);
            }
        } catch (error) {
            alert('An error occurred. Please try again.' + error);
        }
    };

    const toggleWalletVisibility = () => {
        setIsWalletVisible(prevState => !prevState);
    };

    return (
        <PageContainer theme={theme}>
            {isAuthenticated ? (
                <UserInfo theme={theme}>
                    <Title theme={theme}>Hello, {login}!</Title>
                    <BalanceText theme={theme}>Your balance: {balance}</BalanceText>
                    <WalletSection
                        walletAddress={walletAddress}
                        isVisible={isWalletVisible}
                        onToggleVisibility={toggleWalletVisibility}
                        theme={theme}
                    />
                    <StyledButton theme={theme} onClick={() => setIsModalOpen(true)}>
                        Send Money
                    </StyledButton>
                    <SendMoneyModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSend={handleSendMoney}
                        theme={theme}
                    />
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
                <Title theme={theme}>You are not logged in. Please log in.</Title>
            )}
        </PageContainer>
    );
};

export default UsersPage;
