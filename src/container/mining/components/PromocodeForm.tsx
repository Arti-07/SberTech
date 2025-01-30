import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { InputGroup, InputField, Message, EnterButton } from './promocodeForm.style';
import api from '../../../api';
import axios from 'axios';

const PromocodeForm = () => {
    const theme = useTheme();
    const [promocode, setPromocode] = useState('');
    const [message, setMessage] = useState('');

    const backgroundColor = theme.palette.mode === 'dark' ? '#47485A' : '#f9f9f9';

    const handleSignIn = async () => {
        setMessage('');

        if (!promocode) {
            setMessage('Enter promocode!');
            return;
        }

        try {
            const response = await api.applyPromo(promocode);
            if (response.message === "Promo code applied successfully") {
                setMessage(`${response.message}`);
            } else {
                setMessage('Failed to apply promo code.');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;
                setMessage(`Failed to apply promo code. Status code: ${statusCode}`);
            } else {
                setMessage('Failed to apply promo code. Unknown error.');
            }
        }
    };

    return (
        <Box
            sx={{
                width: 400,
                height: '100%',
                textAlign: 'center',
                padding: 2,
                borderRadius: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: backgroundColor
            }}
        >
            <InputGroup>
                <InputField
                    type="text"
                    placeholder="Enter promocode"
                    value={promocode}
                    onChange={(e) => setPromocode(e.target.value)}
                />
            </InputGroup>

            {message && <Message isSuccess={message.includes('successfully')}>{message}</Message>}

            <EnterButton theme={theme} onClick={handleSignIn}>Enter</EnterButton>
        </Box>
    );
};

export default PromocodeForm;
