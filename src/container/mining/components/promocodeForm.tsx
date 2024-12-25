import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { InputGroup, InputField, Message,  EnterButton } from './promocodeForm.style'

import { getConfigValue } from '@brojs/cli';
// getNavigationsValue('smartini_crypto.signin'),

const PromocodeForm = () => {
    const theme = useTheme();
    
    const [promocode, setPromocode] = useState('');
    const [message, setMessage] = useState('');
    
    const backgroundColor = theme.palette.mode === 'dark' ? '#2F4F4F' : '#f9f9f9';

    const handleSignIn = async () => {
        setMessage('');

        if (!promocode) {
            setMessage('Enter promocode!');
            return;
        }

        try {
            var isValidPromo = promocode == 'AAA';
            if(isValidPromo){
                setMessage('promocode is valid!');
            } else {
                setMessage('promocode is not valid!');
            }
        } catch (error: any) {
            setMessage('An error has occurred! Please try again later!');
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
                backgroundColor: backgroundColor,
            }}
        >
            <InputGroup>
                <InputField
                    type="text"
                    placeholder="Enter promocode"
                    value={promocode}
                    onChange={(e) => setPromocode(e.target.value.toUpperCase())}
                />
            </InputGroup>  

            {message && <Message isSuccess={message === 'promocode is valid!'}>{message}</Message>}
            
            <EnterButton theme={theme} onClick={handleSignIn}>Enter</EnterButton>           
        </Box>
    );
};


export default PromocodeForm;