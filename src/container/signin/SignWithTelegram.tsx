import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Button, Message, ModalOverlay, ModalContent, ButtonSecondary } from './components/SignWithTelegramStyles';
import { useTheme } from '@mui/material/styles';

const SignWithTelegram = () => {
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const [qrImage, setQrImage] = useState("");

    useEffect(() => {
        if (theme.palette.mode === 'dark') {
            setQrImage(require("../../assets/images/bot_tg_black.jpg"));
        } else {
            setQrImage(require("../../assets/images/bot_tg_white.jpg"));
        }
    }, [theme]);

    const handleSendTelegramMessage = async () => {
        try {
            const response = await api.sendCode(username);

            if (response.code) {
                setMessage(`The code has been sent: ${response.code}`);
            } else {
                setMessage('The code has been successfully sent to Telegram!');
            }
        } catch (error) {
            setMessage('Couldn\'t send the code.');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await api.loginWithCode(username, verificationCode);

            if (response.message === 'Logged in successfully') {
                setMessage('Вы успешно вошли в систему!');
                sessionStorage.setItem('login', username);
                window.dispatchEvent(new Event('loginChanged'));
                navigate('/smartini_crypto/userspage');
            } else {
                setMessage('Invalid code or login.');
            }
        } catch (error) {
            setMessage('Error when logging in. Check the data.');
        }
    };

    const openQRModal = () => {
        setIsModalOpen(true);
    };

    const closeQRModal = () => {
        setIsModalOpen(false);
    };

    const isSuccessMessage = message.includes('code has been')

    return (
        <Container>
            <h1>Login via Telegram</h1>
            <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={handleSendTelegramMessage}>Send the code to Telegram</Button>

            <Input
                type="text"
                placeholder="Enter the confirmation code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
            />
            {message && <Message success={isSuccessMessage}>{message}</Message>}
            <Button onClick={handleLogin}>Log in to your personal account</Button>

            <Button onClick={openQRModal}>Get a QR code for Telegram</Button>
            <ButtonSecondary onClick={() => navigate('/smartini_crypto/signin')}>
                ←
            </ButtonSecondary>

            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <h2>QR code to go to Telegram</h2>
                        <img
                            src={qrImage}
                            alt="QR-код Telegram"
                            style={{ width: '200px', height: '200px' }}
                        />
                        <p>Enter the command '/sendcode'</p>
                        <Button onClick={closeQRModal}>Close</Button>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default SignWithTelegram;