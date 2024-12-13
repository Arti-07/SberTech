import  React from 'react';
import { useState, useEffect, useRef } from 'react';

import Babah from './components/babah';
import Speedometer from './components/speedometer';
import MotioButton from './components/motionButton';

import { containerCenterStyle } from './components/containerCenter.style'
import { Global } from '@emotion/react'
import { css } from '@emotion/css'
import styled from "@emotion/styled";

import confettiAnimation from '../../assets/lotties/confetti.json'
import coinAnimation from '../../assets/lotties/coin.json'
import Lottie from 'react-lottie'


const AccountTextStyled = styled.h3`
    min-width: 200px;
    font-size: 2.25rem;
    font-weight: 400;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 0;
`;

const confettiStyle = css`
    position: absolute;
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 5;
    pointer-events: none;
`

const MiningContainer = styled.div`
    position: relative;
`

const AccountStyle = styled.div`
    outline: 1rem solid;
`

const ContainerAccount = styled.div`
.container {
display: flex;
justify-content: center;
align-items: center;
}

.card {
width: 355px;
height: 56px;
background: linear-gradient(to right, lightgray, darkblue); /* Градиент */
border-radius: 20px; /* Закругленные края */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
display: flex;
overflow: hidden;
}

.card img {
width: 40%;
object-fit: cover;
}

.account {
margin-left: 16px;
display: flex;
flex-direction: column;
justify-content: center;
}

.account p {
font-size: 18px;
color: white;
margin-bottom: 24px;
}

.account-button {
margin-left: 16px;
display: flex;
flex-direction: column;
justify-content: center;
}

.account-button button {
padding: 8px 16px;
background-color: white;
border: none;
border-radius: 6px;
cursor: pointer;
transition: all 0.3s ease-in-out;
transform: scale(1);
}

.account-button button:hover {
    transform: scale(1.1);
}
`


const MiningPage = (): React.ReactElement => {

    
    const lottieRef = useRef(null);

    const [countMining, setCountMining] = useState(0)
    const [stepMining, setStepMining] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(0)
    const stepDecrease = 0.007;
    const stepIncrease = 0.1;
    const maxProgress = 1.5;
    const timeDecrease = 10;
    const minStepMining = 1;
    const maxStepMining = 5;
    
    useEffect(() => {        
        const interval = setInterval(() => {
            setProgress(p => Math.max(p - stepDecrease, 0) );            
            setIsVisible(Number(progress > 1) );
            setStepMining(isVisible ? maxStepMining : minStepMining);
        }, timeDecrease); 
        return () => clearInterval(interval);
    }, [progress, stepMining, isVisible]);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: confettiAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: coinAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleClick = () => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(1); // Продолжить анимацию с нормальной скоростью
        }
    };
        
    return (
        <>
            {/* <Global
            styles={css`
                body {
                    position: fixed;
                    width: 100%;
                }
            `}
            />      */}

            <MiningContainer>

                <div className={confettiStyle}>
                <Lottie 
                    ref={lottieRef}
                    options={defaultOptions}
                    height={"100%"}
                    width={"100%"}
                />
                </div>

                <ContainerAccount>
                    <div className="container">
                        <div className="card">
                        <Lottie 
                            options={defaultOptions2}
                            height={"100%"}
                            width={"100%"}
                        />
                        <div className="account">
                        <AccountTextStyled> Account: {countMining}</AccountTextStyled>
                        </div>
                        <Lottie 
                            options={defaultOptions2}
                            height={"100%"}
                            width={"100%"}
                        />
                        </div>
                    </div>
                </ContainerAccount>

                {/* <AccountStyle>
                                    
                </AccountStyle> */}

                <Speedometer turnAngle={progress} />

                <MotioButton
                    progress={progress}
                    setProgress={setProgress} 
                    countMining={countMining}
                    stepMining={stepMining}
                    setCountMining={setCountMining} 
                    stepIncrease={stepIncrease}
                    maxProgress={maxProgress}
                />

                {isVisible ? (
                    <div className={containerCenterStyle}>
                        <Babah/>
                    </div>
                    ) : (
                        <></>
                    )
                }

            </MiningContainer>
        </>
    );
};

export default MiningPage;

