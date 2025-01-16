import React from 'react';
import { StyledButton, WalletAddressText } from './components/UsersPageStyles';
import { Theme } from '@mui/material/styles';

interface WalletSectionProps {
    walletAddress: string;
    isVisible: boolean;
    onToggleVisibility: () => void;
    theme: Theme;
}

const WalletSection: React.FC<WalletSectionProps> = ({ walletAddress, isVisible, onToggleVisibility, theme }) => {
    return (
        <div>
            <StyledButton onClick={onToggleVisibility} theme={theme}>
                {isVisible ? 'Hide wallet address' : 'Show wallet address'}
            </StyledButton>
            {isVisible && (
                <div style={{
                    background: theme.palette.mode === 'dark' ? '#2c3e50' : '#f9f9f9',
                    padding: '20px',
                    borderRadius: '15px',
                    marginTop: '20px',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 10px rgba(0, 0, 0, 0.5)' : '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <WalletAddressText theme={theme}>
                        {walletAddress}
                    </WalletAddressText>
                </div>
            )}
        </div>
    );
};

export default WalletSection;
