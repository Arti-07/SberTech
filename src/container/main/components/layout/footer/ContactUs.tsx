import React from 'react';
import { Box, Typography, Link, Avatar, useTheme } from '@mui/material';

import postmalone from 'src/assets/images/postmalone.jpg';
import dualipa from 'src/assets/images/dualipa.jpg';
import eminem from 'src/assets/images/eminem.jpg';
import shoopdog from 'src/assets/images/shoopdog.jpg';

const teamMembers = [
    {
        name: 'Almaz',
        role: 'Frontend Developer',
        contact: 'https://t.me/postyvee',
        avatar: 'https://via.placeholder.com/150',
        image: postmalone,
    },
    {
        name: 'Anna',
        role: 'Frontend Developer, Analyst',
        contact: 'https://t.me/anna_ferzz',
        avatar: 'https://via.placeholder.com/150',
        image: dualipa,
    },
    {
        name: 'Artur',
        role: 'Frontend, Backend Developer',
        contact: 'https://t.me/ar_gin',
        avatar: 'https://via.placeholder.com/150',
        image: eminem,
    },
    {
        name: 'Leonid',
        role: 'Frontend Developer',
        contact: 'https://t.me/ROwaGO',
        avatar: 'https://via.placeholder.com/150',
        image: shoopdog,
    },
];

const TeamContacts: React.FC = () => {
    const theme = useTheme();

    const backgroundColor = theme.palette.mode === 'dark' ? '#2F4F4F' : '#f9f9f9';
    const textColor = theme.palette.mode === 'dark' ? '#ffffff' : '#1E1E2A';
    const roleColor = theme.palette.mode === 'dark' ? '#B0B0B0' : '#797993';
    const linkColor = theme.palette.mode === 'dark' ? '#4CAF50' : '#007AFF';

    return (
        <Box sx={{ textAlign: 'center', py: 4, backgroundColor, borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom sx={{ color: textColor, fontWeight: 'bold' }}>
                Smartini Crypto team
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 3,
                }}
            >
                {teamMembers.map((member) => (
                    <Box
                        key={member.name}
                        sx={{
                            width: { xs: '100%', sm: '45%', md: '45%' },
                            textAlign: 'center',
                            padding: 2,
                            borderRadius: 2,
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Avatar
                            src={member.image}
                            alt={member.name}
                            sx={{
                                width: 100,
                                height: 100,
                                margin: '0 auto',
                                border: '3px solid #fff',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{ mt: 2, fontWeight: 'bold', color: textColor }}
                        >
                            {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: roleColor }}>
                            {member.role}
                        </Typography>
                        <Link
                            href={member.contact}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'block',
                                mt: 1,
                                color: linkColor,
                                textDecoration: 'none',
                                fontWeight: 'medium',
                            }}
                        >
                            Telegram
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TeamContacts;
