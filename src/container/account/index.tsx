import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const AccountPage = (): React.ReactElement => {
    const navigate = useNavigate(); // Хук для навигации
    const theme = useTheme();


    const buttonStyle = {
        padding: '12px 24px',
        margin: '10px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: theme.palette.mode === 'light' ? '#007BFF' : '#444',
        color: theme.palette.mode === 'light' ? '#fff' : '#ccc',
    };

    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: '50px',
                color: theme.palette.mode === 'light' ? 'black' : 'white',
            }}
        >
            <h1 style={{ color: theme.palette.mode === 'light' ? 'black' : 'red' }}>
                Account
            </h1>
            <div style={{ marginTop: '20px' }}>
                <button
                    style={buttonStyle}
                    onClick={() => navigate('/smartini_crypto/signin')}
                >
                    Sign In
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => navigate('/smartini_crypto/signup')}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default AccountPage;
