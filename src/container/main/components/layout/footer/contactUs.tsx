import React from 'react';
import { Box, Typography, Link, Avatar } from '@mui/material';

const teamMembers = [
    {
        name: 'Almaz',
        role: 'Frontend Developer',
        contact: 'https://t.me/postyvee',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Anna',
        role: 'Frontend Developer, Analyst',
        contact: 'https://t.me/anna_ferzz',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Artur',
        role: 'Frontend, Backend Developer',
        contact: 'https://t.me/ar_gin',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Leonid',
        role: 'Frontend Developer',
        contact: 'https://t.me/ROwaGO',
        avatar: 'https://via.placeholder.com/150',
    },
];

const TeamContacts: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#1E1E2A', fontWeight: 'bold' }}>
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
                            src={member.avatar}
                            alt={member.name}
                            sx={{ width: 100, height: 100, margin: '0 auto' }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{ mt: 2, fontWeight: 'bold', color: '#1E1E2A' }}
                        >
                            {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#797993' }}>
                            {member.role}
                        </Typography>
                        <Link
                            href={member.contact}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'block',
                                mt: 1,
                                color: '#007AFF',
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
