import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {getNavigationsValue} from '@brojs/cli';
import {styled} from '@mui/material/styles';

const navigations: Array<{ name: string; href: string }> = [
    {
        name: 'Account Page',
        href: getNavigationsValue('smartini_crypto.account'),
    },
    {
        name: 'Main Page',
        href: getNavigationsValue('smartini_crypto.main'),
    },
    {
        name: 'Детальная информация',
        href: getNavigationsValue('smartini_crypto.detail'),
    },
    {
        name: 'Mining your crypto',
        href: getNavigationsValue('smartini_crypto.mining'),
    },
];

// Кастомные стили для кнопок
const GradientButton = styled(Button)(({theme}) => ({
    color: '#fff',
    borderRadius: '20px',
    padding: '8px 16px',
    marginLeft: theme.spacing(1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textTransform: 'none',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 5px 8px 3px rgba(255, 105, 135, .4)',
    },
}));

const Header = (): React.ReactElement => {
    return (
        <AppBar
            position="static"
            sx={{
                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                    }}
                >
                    Smartini Crypto
                </Typography>
                {navigations.map((item) => (
                    <GradientButton key={item.name} component={Link} to={item.href}>
                        {item.name}
                    </GradientButton>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
