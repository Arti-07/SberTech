import React from 'react';
import { StyledButton, WalletAddressText } from './components/UsersPageStyles';
import { Theme } from '@mui/material/styles';
import { FaClipboard } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WalletSectionProps {
    walletAddress: string;
    isVisible: boolean;
    onToggleVisibility: () => void;
    theme: Theme;
}

const WalletSection: React.FC<WalletSectionProps> = ({ walletAddress, isVisible, onToggleVisibility, theme }) => {

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress)
            .then(() => {
                toast.success('Address copied to clipboard!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: theme.palette.mode === 'dark' ? 'dark' : 'light'
                });
            })
            .catch(err => {
                toast.error('Failed to copy address. Please try again.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: theme.palette.mode === 'dark' ? 'dark' : 'light'
                });
                console.error('Clipboard copy error:', err);
            });
    };

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
                    <WalletAddressText theme={theme} style={{ display: 'flex', alignItems: 'center' }}>
                        {walletAddress}
                        <FaClipboard
                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                            onClick={handleCopyToClipboard}
                        />
                    </WalletAddressText>
                </div>
            )}
        </div>
    );
};

export default WalletSection;
