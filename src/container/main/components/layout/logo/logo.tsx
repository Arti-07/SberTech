import React from 'react';
import styled from '@emotion/styled';
import logoPng from './logo_white.png';

const LogoStyled = styled.img`
  width: 100px;
  height: 100px;
  padding: 8px;
`;

const Logo = () => {
    return <LogoStyled src={logoPng} alt={'logo_white)'} />;
};

export default Logo;