import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
    return (
        <Box sx={{ color: '#797993', fontFamily: 'Verdana', lineHeight: 1.6 }}>
            <Typography>
                This Privacy Policy describes how we collect, use, and protect your information when you use our
                website and services.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                1. Information We Collect
            </Typography>
            <Typography component="ul">
                <li>Personal data you provide directly.</li>
                <li>Usage data collected automatically (e.g., IP address, browser type).</li>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                2. Data Protection
            </Typography>
            <Typography>
                We use industry-standard encryption to protect your data.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                3. Third-Party Sharing
            </Typography>
            <Typography>
                We do not share your information with third parties unless required by law.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                5. Your Rights
            </Typography>
            <Typography component="ul">
                <li>You have the right to access your personal data.</li>
            </Typography>
        </Box>
    );
};

export default PrivacyPolicy;
