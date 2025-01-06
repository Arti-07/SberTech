import React, { useState } from 'react';
import { Theme } from '@mui/material/styles';
import { ButtonGroup, Input, ModalContainer, ModalOverlay, StyledButton } from './components/SendMoneyModalStyle';

interface SendMoneyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSend: (amount: number, address: string) => void;
    theme: Theme;
}

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ isOpen, onClose, onSend, theme }) => {
    const [amount, setAmount] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    if (!isOpen) return null;

    const handleSend = () => {
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0 || !address) {
            alert('Enter a valid amount');
            return;
        }
        onSend(numericAmount, address);
        setAmount('');
        setAddress('');
        onClose();
    };

    return (
        <ModalOverlay>
            <ModalContainer theme={theme}>
                <h2>Send Money</h2>
                <Input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    theme={theme}
                />
                <Input
                    type="text"
                    placeholder="Recipient address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    theme={theme}
                />
                <ButtonGroup>
                    <StyledButton onClick={handleSend} theme={theme}>Send</StyledButton>
                    <StyledButton onClick={onClose} theme={theme}>Cancel</StyledButton>
                </ButtonGroup>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default SendMoneyModal;