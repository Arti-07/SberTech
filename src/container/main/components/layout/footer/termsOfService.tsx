import React from 'react';
import { Box, Typography } from '@mui/material';

const TermsOfService: React.FC = () => {
    return (
        <Box sx={{ color: '#797993', fontFamily: 'Verdana', lineHeight: 1.6 }}>
            <Typography>
                These Terms of Service govern the use of our website and services. By using our platform, you agree to comply with these terms.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                1. Account Creation
            </Typography>
            <Typography component="ul">
                <li>You must provide accurate information during registration.</li>
                <li>You are responsible for maintaining the confidentiality of your account.</li>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                2. Use of Services
            </Typography>
            <Typography component="ul">
                <li>You agree not to misuse the services.</li>
                <li>You may not engage in illegal activities while using the platform.</li>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                3. Content
            </Typography>
            <Typography component="ul">
                <li>All content provided on the platform is owned by us.</li>
                <li>You are prohibited from copying, distributing, or modifying content without permission.</li>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                4. Limitation of Liability
            </Typography>
            <Typography>
                We are not responsible for any damages that may occur through the use of the platform.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                5. Termination
            </Typography>
            <Typography>
                We reserve the right to suspend or terminate your account if you violate these terms.
            </Typography>
        </Box>
    );
};

export default TermsOfService;
