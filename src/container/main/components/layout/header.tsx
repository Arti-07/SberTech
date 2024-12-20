import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';
import { NavButton, ActiveNavButton, StyledAppBar, LogoContainer } from './components/HeaderStyles';
import logoBlack from './logo/logo_black.png';
import logoWhite from './logo/logo_white.png';


const navigations = [
    { name: 'Main Page', href: getNavigationsValue('smartini_crypto.main') },
    { name: 'Detail', href: getNavigationsValue('smartini_crypto.detail') },
    { name: 'Mining your crypto', href: getNavigationsValue('smartini_crypto.mining') },
    { name: 'Account Page', href: getNavigationsValue('smartini_crypto.account') },
];

const Header = (): React.ReactElement => {
    const location = useLocation();
    const theme = useTheme();


    const isLightTheme = theme.palette.mode === 'light';

    return (
        <div>
            <StyledAppBar position="static">
                <Toolbar>
                    <LogoContainer>
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
        </div>
    );
};

export default Header;
