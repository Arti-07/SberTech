import React, { useEffect, useState } from 'react';
import { Toolbar, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';
import Lottie from 'react-lottie';
import sadMorty from '../../../../assets/lotties/sadmorty.json';
import sadBear from '../../../../assets/lotties/sadbear.json';
import sadSpace from '../../../../assets/lotties/sadspace.json';
import { NavButton, ActiveNavButton, StyledAppBar, LogoContainer, LoginText, SignOutButton, LottieContainer } from './components/HeaderStyles';
import logoBlack from './logo/logo_black.png';
import logoWhite from './logo/logo_white.png';
import ReactDOM from 'react-dom';

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
        const animations = [sadMorty, sadBear, sadSpace];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

        const lottieOptions = {
            loop: true,
            autoplay: true,
            animationData: randomAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };

        const lottieElement = (
            <LottieContainer className="lottie-container">
                <Lottie options={lottieOptions} height="100%" width="100%" />
            </LottieContainer>
        );

        const lottieContainer = document.createElement('div');
        document.body.appendChild(lottieContainer);
        ReactDOM.render(lottieElement, lottieContainer);

        setTimeout(() => {
            lottieContainer.querySelector('.lottie-container')?.classList.add('visible');
        }, 500);

        const firstConfirmExit = window.confirm("Are you sure you want to sign out?");
        if (firstConfirmExit) {
            const secondConfirmExit = window.confirm("Bro, are you sure?");
            if (secondConfirmExit) {
                setTimeout(() => {
                    document.body.removeChild(lottieContainer);
                    sessionStorage.removeItem('login');
                    setLogin(null);
                    navigate('/smartini_crypto/signin');
                }, 4000);
            }
        }
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
                            <SignOutButton theme={theme} onClick={handleSignOut}>
                                Sign out
                            </SignOutButton>
                        </>
                    )}

                    {navigations.map((item) => {
                        const isActive = location.pathname === item.href;
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
                </div>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
