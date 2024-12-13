import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';
import { styled } from '@mui/material/styles';
import Logo from './logo/logo';
import { HeaderContainer } from './index.style';


const navigations = [
    { name: 'Main Page', href: getNavigationsValue('smartini_crypto.main') },
    { name: 'Detail', href: getNavigationsValue('smartini_crypto.detail') },
    { name: 'Mining your crypto', href: getNavigationsValue('smartini_crypto.mining') },
    { name: 'Account Page', href: getNavigationsValue('smartini_crypto.account') },
];

const NavButton = styled(Button)(({ theme }) => ({
    color: '#797993',
    borderRadius: '20px',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '6px 12px',
    margin: '0 8px',
    transition: 'all 0.3s ease',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#797993',
        transform: 'scale(1.1)',
    },
}));

const ActiveNavButton = styled(NavButton)({
    backgroundColor: '#797993',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#797993',
    },
});

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#1E1E2A',
    boxShadow: 'none',
});

// Стили для контейнера с логотипом и названием
const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

const Header = (): React.ReactElement => {
    const location = useLocation();

    return (
        <HeaderContainer>
            <StyledAppBar position="static">
                <Toolbar>
                    <LogoContainer>
                        <Logo />
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Impact',
                                fontSize: '30px',
                                letterSpacing: '4px',
                                color: '#FFFFFF',
                            }}
                        >
                            Smartini Crypto
                        </Typography>
                    </LogoContainer>

                    <div style={{ marginLeft: 'auto' }}>
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
