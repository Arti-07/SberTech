import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { InputGroup, InputField, Message,  EnterButton } from './promocodeForm.style'
import api from '../../../api';

import { getConfig } from '@brojs/cli';


function getPromocode() {
    const config = getConfig();
    const entries_config = Object.entries(config);
    const promo_config = entries_config.filter(([key]) => key.includes('promocode'));
    return promo_config.map(([, value]) => value)
}

const PromocodeForm = () => {
    const theme = useTheme();
    // получаем список промокодов
    const promo_list = getPromocode();
    
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
            const isValidPromo = promo_list.includes(promocode);
            if(isValidPromo){
                const promocodeUseFirst = sessionStorage.getItem(promocode);
                if(!promocodeUseFirst){
                    try {
                        api.updateBalance(2024);
                        sessionStorage.setItem(promocode, 'True');
                        setMessage('promocode is valid! Add 2024 coin!');
                    } catch (error: any) {
                        setMessage('An error has occurred! Please try again later!');
                    }                    
                } else {
                    setMessage('promocode is used!');
                }
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