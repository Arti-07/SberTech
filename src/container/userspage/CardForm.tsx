import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { StyledButton, AmountInput } from './components/UsersPageStyles';
import {
    CardField,
    ModalTitle,
    ErrorText,
    CardStyledContainer,
    CardHint
} from './components/CardFormStyle';
import { Theme } from '@mui/material/styles';
import { toast } from 'react-toastify';

interface CardFormProps {
    onSubmitCardDetails: (amount: number) => void;
    theme: Theme;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmitCardDetails, theme }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    const [isCardValid, setIsCardValid] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [cardType, setCardType] = useState<string | null>(null);

    useEffect(() => {
        const isCardNumberValid = cardNumber.replace(/\s/g, '').length === 16;
        const isExpiryDateValid = /^\d{2}\/\d{2}$/.test(expiryDate);
        const isCvvValid = /^\d{3}$/.test(cvv);

        setIsCardValid(isCardNumberValid && isExpiryDateValid && isCvvValid);
        setError(null);

        // Определение типа карты
        if (cardNumber.startsWith('4')) {
            setCardType('Visa');
        } else if (cardNumber.startsWith('5')) {
            setCardType('MasterCard');
        } else if (cardNumber.startsWith('3')) {
            setCardType('American Express');
        } else {
            setCardType(null);
        }
    }, [cardNumber, expiryDate, cvv]);

    const handleCardSubmit = () => {
        const amountNumber = parseFloat(amount);
        if (isNaN(amountNumber) || amountNumber <= 0) {
            setError('Enter the correct amount.');
            return;
        }
        setError(null);
        onSubmitCardDetails(amountNumber);

        console.log('Successfully submitted card');

        toast.success('Your balance was successfully topped up!', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'colored',
        });
    };

    const getCardBackground = () => {
        switch (cardType) {
            case 'Visa':
                return '#dff7d5';
            case 'MasterCard':
                return '#d5e7f7';
            case 'American Express':
                return '#f7d5f5';
            default:
                return '#f7f9fc';
        }
    };

    return (
        <CardStyledContainer background={getCardBackground()}>
            <ModalTitle>Top up your balance</ModalTitle>

            <InputMask
                mask="9999 9999 9999 9999"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            >
                {(inputProps) => (
                    <CardField
                        {...inputProps}
                        type="text"
                        placeholder="Card number"
                        inputMode="numeric"
                    />
                )}
            </InputMask>
            {cardType && <CardHint>{cardType}</CardHint>}

            <InputMask
                mask="99/99"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
            >
                {(inputProps) => (
                    <CardField
                        {...inputProps}
                        type="text"
                        placeholder="Validity period (MM/YY)"
                        inputMode="numeric"
                    />
                )}
            </InputMask>

            <CardField
                type="text"
                placeholder="CVV"
                maxLength={3}
                value={cvv}
                onChange={(e) => {
                    if (/^\d*$/.test(e.target.value)) setCvv(e.target.value); // Только цифры
                }}
                inputMode="numeric"
            />

            <AmountInput
                type="number"
                placeholder="Sum"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={!isCardValid}
                theme={theme}
                inputMode="decimal"
            />

            {error && <ErrorText>{error}</ErrorText>}

            <StyledButton onClick={handleCardSubmit} disabled={!isCardValid} theme={theme}>
                Send
            </StyledButton>
        </CardStyledContainer>
    );
};

export default CardForm;
