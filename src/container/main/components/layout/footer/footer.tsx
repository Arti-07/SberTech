import React, { useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FooterNavButton, FooterContainer, FooterText } from './components/FooterStyles';
import PrivacyPolicy from './privacyPolicy';
import TermsOfService from './termsOfService';
import ContactUs from './contactUs';

const footerNavigations = [
    { name: 'Privacy Policy', content: <PrivacyPolicy /> },
    { name: 'Terms of Service', content: <TermsOfService /> },
    { name: 'Contact', content: <ContactUs /> },
];

const Footer = (): React.ReactElement => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState('');
    const theme = useTheme(); // Получаем текущую тему

    const handleClickOpen = (title: string, content: React.ReactNode) => {
        setModalTitle(title);
        setModalContent(content);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <FooterContainer theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                {footerNavigations.map((item) => (
                    <FooterNavButton
                        key={item.name}
                        theme={theme}
                        onClick={() => handleClickOpen(item.name, item.content)}
                    >
                        {item.name}
                    </FooterNavButton>
                ))}
            </Box>

            <FooterText theme={theme}>&copy; 2024 Smartini Crypto | All rights reserved.</FooterText>

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
