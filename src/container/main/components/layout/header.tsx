import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';
import { NavButton, ActiveNavButton, StyledAppBar, LogoContainer, LoginText } from './components/HeaderStyles';
import logoBlack from './logo/logo_black.png';
import logoWhite from './logo/logo_white.png';

const navigations = [
    { name: 'Main Page', href: getNavigationsValue('smartini_crypto.main') },
    { name: 'Detail', href: getNavigationsValue('smartini_crypto.detail') },
    { name: 'Mining your crypto', href: getNavigationsValue('smartini_crypto.mining') },
    { name: 'Account Page', href: getNavigationsValue('smartini_crypto.account') },
];

const Header = (): React.ReactElement => {
    const [login, setLogin] = useState<string | null>(null); // Состояние для логина
    const location = useLocation();
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        const storedLogin = sessionStorage.getItem('login');
        if (storedLogin) {
            setLogin(storedLogin); // Устанавливаем логин, если он есть
        }

        // Слушаем событие, которое будет обновлять состояние логина
        const handleLoginChanged = () => {
            const newLogin = sessionStorage.getItem('login');
            setLogin(newLogin); // Обновляем состояние с новым логином
        };

        window.addEventListener('loginChanged', handleLoginChanged);

        return () => {
            window.removeEventListener('loginChanged', handleLoginChanged);
        };
    }, []); // Монтируем один раз при загрузке компонента

    const isLightTheme = theme.palette.mode === 'light';

    const handleNavigationClick = (href: string) => {
        if (href === getNavigationsValue('smartini_crypto.account') && login) {
            navigate('/smartini_crypto/userspage');
        } else {
            navigate(href);
        }
    };

    return (
        <StyledAppBar position="static">
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
                            color: isLightTheme ? 'black' : 'white',
                        }}
                    >
                        Smartini Crypto
                    </Typography>
                </LogoContainer>

                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    {login && (
                        <LoginText isLightTheme={isLightTheme}>
                            Hello, {login}
                        </LoginText>
                    )}

                    {navigations.map((item) => {
                        const isActive = location.pathname === item.href;
                        const ButtonComponent = isActive ? ActiveNavButton : NavButton;

                        return (
                            <ButtonComponent
                                key={item.name}
                                onClick={() => handleNavigationClick(item.href)} // Обработка клика
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
