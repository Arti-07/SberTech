import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { StyledButton, AmountInput } from './components/UsersPageStyles';
import { CardField, ModalTitle, ErrorText, CardStyledContainer, CardHint } from './components/CardFormStyle';
import { Theme } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { luhnCheck, isExpiryDateValid, isCvvValid, detectCardType } from './utils/validationUtils';

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
        const cleanCardNumber = cardNumber.replace(/[^0-9]/g, '');
        const isCardNumberValid = cleanCardNumber.length === 16 && luhnCheck(cleanCardNumber);

        setIsCardValid(
            isCardNumberValid &&
            isExpiryDateValid(expiryDate) &&
            isCvvValid(cvv)
        );
        setError(null);
        setCardType(detectCardType(cleanCardNumber));
    }, [cardNumber, expiryDate, cvv]);

    const handleCardSubmit = () => {
        const amountNumber = parseFloat(amount);
        if (isNaN(amountNumber) || amountNumber <= 0) {
            setError('Enter the correct amount.');
            return;
        }
        setError(null);
        onSubmitCardDetails(amountNumber);

        toast.success('Your balance was successfully topped up!', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'colored'
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
                mask="9999 · 9999 · 9999 · 9999"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            >
                {(inputProps) => (
                    <CardField
                        {...inputProps}
                        type="text"
                        placeholder="Card number"
                        inputMode="numeric"
                        style={{
                            fontVariantNumeric: 'tabular-nums',
                            letterSpacing: '2px'
                        }}
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
                    if (/^\d*$/.test(e.target.value)) setCvv(e.target.value);
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
