import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import {Container, Message, Button} from './StyledProtectedRoute';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const isAuthenticated = !!sessionStorage.getItem('login');
    const navigate = useNavigate();
    const theme = useTheme();

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Container theme={theme}>
            <Message theme={theme}>You cannot access this page without logging in.</Message>
            <Button theme={theme} onClick={() => navigate('/smartini_crypto/signin')}>
                Log In
            </Button>
            <Button theme={theme} onClick={() => navigate('/smartini_crypto/signup')}>
                Registration
            </Button>
        </Container>
    );
};

export default ProtectedRoute;
