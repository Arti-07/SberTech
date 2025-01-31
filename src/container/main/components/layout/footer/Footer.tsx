import React, { useState, useEffect } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FooterNavButton, FooterContainer, FooterText, ToggleButton, ToggleIcon } from './components/FooterStyles';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';
import { motion } from 'framer-motion';

const footerNavigations = [
    { name: 'Privacy Policy', content: <PrivacyPolicy /> },
    { name: 'Terms of Service', content: <TermsOfService /> },
    { name: 'Contact', content: <ContactUs /> }
];

const Footer = ({ darkMode, toggleTheme }: { darkMode: boolean; toggleTheme: () => void }) => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState('');
    const theme = useTheme();

    const [initialRenderDone, setInitialRenderDone] = useState(false);

    const handleClickOpen = (title: string, content: React.ReactNode) => {
        setModalTitle(title);
        setModalContent(content);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setInitialRenderDone(true);
    }, []);

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

            <FooterText theme={theme}>&copy; 2025 Smartini Crypto | All rights reserved.</FooterText>

            <ToggleButton darkMode={darkMode} onClick={toggleTheme}>
                <motion.div
                    initial={{ x: darkMode ? 50 : 0 }}
                    animate={{ x: darkMode ? 0 : 50 }}
                    transition={{ duration: initialRenderDone ? 0.3 : 0 }}
                    style={{
                        position: 'absolute',
                        top: 3,
                        left: 3,
                    }}
                >
                    <ToggleIcon>
                        {darkMode ? '🌙' : '🌞'}
                    </ToggleIcon>
                </motion.div>
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
