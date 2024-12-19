import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { PageContainer, Title, ButtonContainer, Button } from './components/AccountPageStyles';

const AccountPage = (): React.ReactElement => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <PageContainer theme={theme}>
            <Title theme={theme}>Account</Title>
            <ButtonContainer>
                <Button theme={theme} onClick={() => navigate('/smartini_crypto/signin')}>
                    Sign In
                </Button>
                <Button theme={theme} onClick={() => navigate('/smartini_crypto/signup')}>
                    Sign Up
                </Button>
            </ButtonContainer>
        </PageContainer>
    );
};

export default AccountPage;
