import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';
import { styled } from '@mui/material/styles';
import { HeaderContainer } from './index.style';
import logoBlack from './logo/logo_black.png';
import logoWhite from './logo/logo_white.png';

const navigations = [
    { name: 'Main Page', href: getNavigationsValue('smartini_crypto.main') },
    { name: 'Detail', href: getNavigationsValue('smartini_crypto.detail') },
    { name: 'Mining your crypto', href: getNavigationsValue('smartini_crypto.mining') },
    { name: 'Account Page', href: getNavigationsValue('smartini_crypto.account') },
];

// Новый стиль для кнопок
const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 16px',
    margin: '0 8px',
    backgroundColor: '#9B6162',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#8A0402', // Темный оттенок при наведении
        transform: 'scale(1.05)',
    },
    '&:focus': {
        outline: 'none',
    },
}));

const ActiveNavButton = styled(NavButton)(({ theme }) => ({
    backgroundColor: '#8A0402',
    color: theme.palette.text.primary,
    '&:hover': {
        backgroundColor: '#8A0402',
    },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1E1E2A' : '#ADD8E6', // Голубой для светлой и темный для темной темы
    boxShadow: 'none',
}));

const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

const Header = (): React.ReactElement => {
    const location = useLocation();
    const theme = useTheme();

    // Условие для логотипа и цвета текста
    const isLightTheme = theme.palette.mode === 'light';

    return (
        <HeaderContainer>
            <StyledAppBar position="static">
                <Toolbar>
                    <LogoContainer>
                        {/* Логотип меняется в зависимости от темы */}
                        <img
                            src={isLightTheme ? logoBlack : logoWhite}
                            alt="Smartini Crypto Logo"
                            style={{
                                width: '50px',
                                height: '50px',
                                marginTop: '-8px',
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Impact',
                                fontSize: '30px',
                                letterSpacing: '4px',
                                color: isLightTheme ? 'black' : 'white',
                            }}
                        >
                            Smartini Crypto
                        </Typography>
                    </LogoContainer>

                    <div style={{marginLeft: 'auto'}}>
                        {navigations.map((item) => {
                            const isActive = location.pathname === item.href;
                            const ButtonComponent = isActive ? ActiveNavButton : NavButton;

                            return (
                                <ButtonComponent
                                    key={item.name}
                                    component={Link}
                                    to={item.href}
                                >
                                    {item.name}
                                </ButtonComponent>
                            );
                        })}
                    </div>
                </Toolbar>
            </StyledAppBar>
        </HeaderContainer>
    );
};

export default Header;
