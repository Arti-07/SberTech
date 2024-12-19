import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';
import PrivacyPolicy from './privacyPolicy';
import TermsOfService from './termsOfService';
import ContactUs from './contactUs';

// Определение footerNavigations
const footerNavigations = [
    { name: 'Privacy Policy', content: <PrivacyPolicy /> },
    { name: 'Terms of Service', content: <TermsOfService /> },
    { name: 'Contact', content: <ContactUs /> },
];

const FooterNavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '6px 12px',
    margin: '0 8px',
    transition: 'all 0.3s ease',
    '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
        transform: 'scale(1.1)',
    },
}));

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1E1E2A' : '#ADD8E6', // Устанавливаем цвет фона для светлой и темной темы
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto',
    position: 'fixed', // Фиксация футера
    bottom: 0, // Привязываем футер к нижней части окна
    left: 0,
    right: 0,
    zIndex: 1,
}));

const FooterText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Verdana',
    fontSize: '14px',
    color: theme.palette.mode === 'dark' ? 'white' : 'black', // Цвет текста для темной и светлой темы
    marginBottom: '10px',
}));

const Footer = (): React.ReactElement => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState('');

    const handleClickOpen = (title: string, content: React.ReactNode) => {
        setModalTitle(title);
        setModalContent(content);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <FooterContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                {footerNavigations.map((item) => (
                    <FooterNavButton
                        key={item.name}
                        onClick={() => handleClickOpen(item.name, item.content)}
                    >
                        {item.name}
                    </FooterNavButton>
                ))}
            </Box>

            <FooterText>&copy; 2024 Smartini Crypto | All rights reserved.</FooterText>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>{modalContent}</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: '#1E1E2A' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </FooterContainer>
    );
};

export default Footer;
