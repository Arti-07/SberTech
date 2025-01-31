import React, { useEffect, useState } from 'react';
import { Toolbar, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';
import { NavButton, ActiveNavButton, StyledAppBar, LogoContainer, LoginText, SignOutButton } from './components/HeaderStyles';
import logoBlack from './logo/logo_black.png';
import logoWhite from './logo/logo_white.png';
import exitBlack from '../../../../assets/images/exit_black.png';
import exitWhite from '../../../../assets/images/exit_white.png';

const navigations = [
    { name: 'Home', href: getNavigationsValue('smartini_crypto.main') },
    { name: 'Mining', href: getNavigationsValue('smartini_crypto.mining') },
    { name: 'Account', href: getNavigationsValue('smartini_crypto.account') }
];

const Header = (): React.ReactElement => {
    const [login, setLogin] = useState<string | null>(null);
    const location = useLocation();
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        const storedLogin = sessionStorage.getItem('login');
        if (storedLogin) {
            setLogin(storedLogin);
        }

        const handleLoginChanged = () => {
            const newLogin = sessionStorage.getItem('login');
            setLogin(newLogin);
        };

        window.addEventListener('loginChanged', handleLoginChanged);

        return () => {
            window.removeEventListener('loginChanged', handleLoginChanged);
        };
    }, []);

    const isLightTheme = theme.palette.mode === 'light';

    const handleNavigationClick = (href: string) => {
        if (href === getNavigationsValue('smartini_crypto.account') && login) {
            navigate('/smartini_crypto/userspage');
        } else {
            navigate(href);
        }

    };

    const handleSignOut = () => {
        sessionStorage.removeItem('login');
        setLogin(null);
        navigate('/smartini_crypto/signin');
    };

    return (
        <StyledAppBar position="static" theme={theme}>
            <Toolbar>
                <LogoContainer>
                    <img
                        src={isLightTheme ? logoBlack : logoWhite}
                        alt="Smartini Crypto Logo"
                        style={{ width: '50px', height: '50px', marginTop: '-8px' }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Impact',
                            fontSize: '30px',
                            letterSpacing: '4px',
                            color: isLightTheme ? 'black' : 'white'
                        }}
                    >
                        Smartini Crypto
                    </Typography>
                </LogoContainer>

                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    {login && (
                        <>
                            <LoginText isLightTheme={isLightTheme}>
                                Hello, {login}
                            </LoginText>
                        </>
                    )}


                    {navigations.map((item) => {
                        let  isActive = location.pathname === item.href;
                        if (item.name === 'Account' && location.pathname === '/smartini_crypto/userspage') {
                            isActive = true;
                        }
                        const ButtonComponent = isActive ? ActiveNavButton : NavButton;

                        return (
                            <ButtonComponent
                                key={item.name}
                                theme={theme}
                                onClick={() => handleNavigationClick(item.href)}
                            >
                                {item.name}
                            </ButtonComponent>
                        );
                    })}
                    {login && (
                        <SignOutButton theme={theme} onClick={handleSignOut}>
                            <img
                                src={isLightTheme ? exitBlack : exitWhite}
                                alt="Sign out"
                                style={{ width: '24px', height: '24px' }}
                            />
                        </SignOutButton>
                    )}
                </div>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
