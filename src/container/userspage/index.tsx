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
    BalanceAmount
} from './components/UsersPageStyles';
import WalletSection from './WalletSection';
import SendMoneyModal from './SendMoneyModal';
import CardForm from './CardForm';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';

import UsdtLogo from '../../assets/images/tether-usdt-logo.png';

const UsersPage = () => {
    const theme = useTheme();
    const [login, setLogin] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(0);
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
    useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCardFormVisible, setIsCardFormVisible] = useState(false);

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


    const handleCardDetailsSubmit = (amount: number) => {
        setIsCardFormVisible(false);
        const previousBalance = balance;
        const updatedBalance = balance + amount;
        setBalance(updatedBalance);

        api.updateBalance(amount)
            .then(data => {
                if (data.balance !== undefined) {
                    setBalance(data.balance);
                } else if (data.error) {
                    alert(`Error: ${data.error}`);
                    setBalance(previousBalance);
                }
            })
            .catch(err => {
                console.error('API error:', err);
                setBalance(previousBalance);
            });
    };


    const handleSendMoney = async (amount: number, address: string) => {
        try {
            const response = await api.transfer(address, amount);
            if (response.error) {
                alert(`Error: ${response.error}`);
            } else {
                toast.success('Transfer successful!', {
                    position: 'top-right',
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: 'colored'
                });
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
                    <BalanceText theme={theme}>
                        Your balance:
                        <Typography
                            variant="h6"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                fontWeight: 600,
                                marginLeft: 1
                            }}
                        >
                            <BalanceAmount>{balance.toFixed(2)}</BalanceAmount>
                            <img src={UsdtLogo} alt="USDT Logo" style={{ width: 30, height: 30, marginLeft: 8 }} />
                        </Typography>
                    </BalanceText>

                    <WalletSection
                        walletAddress={walletAddress}
                        isVisible={isWalletVisible}
                        onToggleVisibility={toggleWalletVisibility}
                        theme={theme}
                    />
                    <StyledButton theme={theme} onClick={() => setIsModalOpen(true)}>
                        Send money
                    </StyledButton>
                    <SendMoneyModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSend={handleSendMoney}
                        theme={theme}
                    />

                    <StyledButton
                        theme={theme}
                        onClick={() => setIsCardFormVisible(true)}
                    >
                        Top up balance
                    </StyledButton>
                    <Modal
                        open={isCardFormVisible}
                        onClose={() => setIsCardFormVisible(false)}
                    >
                        <CardForm
                            onSubmitCardDetails={handleCardDetailsSubmit}
                            theme={theme}
                        />
                    </Modal>
                </UserInfo>
            ) : (
                <Title theme={theme}>You are not logged in. Please log in.</Title>
            )}
        </PageContainer>
    );

};

export default UsersPage;
