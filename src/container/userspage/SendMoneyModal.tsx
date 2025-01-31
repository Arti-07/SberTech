import React, { useState } from 'react';
import { Theme } from '@mui/material/styles';
import {
    ButtonGroup,
    Input,
    ModalContainer,
    ModalOverlay,
    ModalHeader,
    StyledButton
} from './components/SendMoneyModalStyle';

interface SendMoneyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSend: (amount: number, address: string) => void;
    theme: Theme;
}

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ isOpen, onClose, onSend, theme }) => {
    const [amount, setAmount] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

    if (!isOpen) return null;

    const handleConfirmSend = () => {
        setIsConfirmOpen(true);
    };

    const handleSend = () => {
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0 || !address.trim()) {
            alert('Please enter a valid amount and recipient address.');
            return;
        }

        setIsSubmitting(true);
        onSend(numericAmount, address.trim());
        setAmount('');
        setAddress('');
        setIsSubmitting(false);
        setIsConfirmOpen(false);
        onClose();
    };

    return (
        <>
            <ModalOverlay>
                <ModalContainer theme={theme}>
                    <ModalHeader theme={theme}>Send Money</ModalHeader>
                    <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        theme={theme}
                        disabled={isSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Recipient address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        theme={theme}
                        disabled={isSubmitting}
                    />
                    <ButtonGroup>
                        <StyledButton onClick={handleConfirmSend} theme={theme} disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Send'}
                        </StyledButton>
                        <StyledButton onClick={onClose} theme={theme} disabled={isSubmitting}>
                            Cancel
                        </StyledButton>
                    </ButtonGroup>
                </ModalContainer>
            </ModalOverlay>

            {isConfirmOpen && (
                <ModalOverlay>
                    <ModalContainer theme={theme}>
                        <ModalHeader theme={theme}>Confirm Transaction</ModalHeader>
                        <p>Are you sure you want to send {amount} to {address}?</p>
                        <ButtonGroup>
                            <StyledButton onClick={handleSend} theme={theme}>
                                Confirm
                            </StyledButton>
                            <StyledButton onClick={() => setIsConfirmOpen(false)} theme={theme}>
                                Cancel
                            </StyledButton>
                        </ButtonGroup>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </>
    );
};

export default SendMoneyModal;
