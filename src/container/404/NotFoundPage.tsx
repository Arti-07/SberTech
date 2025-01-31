import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import BackgroundImage from '../../assets/images/404_image.jpg';
import { getNavigationsValue } from '@brojs/cli';

const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #ffffff;
    text-align: center;

    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;


const Switch = styled.button<{ active: boolean; index: number }>`
    width: 100px;
    height: 150px;
    border: none;
    border-radius: 10px;
    background-color: ${({ active }) => (active ? '#4caf50' : '#333333')};
    box-shadow: ${({ active }) =>
            active ? '0 0 15px #4caf50' : '0 0 5px #000000'};
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
    position: relative;

    &:hover {
        background-color: ${({ active }) =>
                active ? '#43a047' : '#444444'};
    }

    &::after {
        content: ${({ index }) => (index === 1 ? '\'0\'' : '\'4\'')};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        font-weight: bold;
        color: ${({ active }) => (active ? '#ffffff' : '#555555')};
        opacity: ${({ active }) => (active ? '1' : '0.3')};
        transition: color 0.3s, opacity 0.3s;
    }
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #90caf9;
`;

const BackButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: #90caf9;
    color: #121212;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
        background-color: #6fabd8;
    }
`;

const NotFoundPage = () => {
    const [switches, setSwitches] = useState([false, false, false]);

    const toggleSwitch = (index: number) => {
        setSwitches((prev) =>
            prev.map((state, i) => (i === index ? !state : state))
        );
    };

    const navigationUrl = getNavigationsValue('smartini_crypto.main');
    return (
        <>
            <Global styles={GlobalStyles} />
            <Container>
                <SwitchContainer>
                    {switches.map((isActive, index) => (
                        <Switch
                            key={index}
                            active={isActive}
                            index={index}
                            onClick={() => toggleSwitch(index)}
                        />
                    ))}
                </SwitchContainer>
                <Subtitle>Page Not Found</Subtitle>
                <BackButton href={navigationUrl}>Go Back to Home</BackButton>
            </Container>
        </>
    );
};

export default NotFoundPage;
