import React, { useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FooterNavButton, FooterContainer, FooterText, ToggleButton, ToggleIcon } from './FooterStyles';
import PrivacyPolicy from '../privacyPolicy';
import TermsOfService from '../termsOfService';
import ContactUs from '../contactUs';
import { styles } from './FooterStyles';

// Используем стили
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={styles.pageWrapper}>  {/* Применение стилей */}
            <div style={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

const footerNavigations = [
    { name: 'Privacy Policy', content: <PrivacyPolicy /> },
    { name: 'Terms of Service', content: <TermsOfService /> },
    { name: 'Contact', content: <ContactUs /> },
];

const Footer = ({ darkMode, toggleTheme }: { darkMode: boolean; toggleTheme: () => void }) => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState('');
    const theme = useTheme();

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

            <ToggleButton darkMode={darkMode} onClick={toggleTheme}>
                <ToggleIcon>{darkMode ? '🌙' : '🌞'}</ToggleIcon>
            </ToggleButton>

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
