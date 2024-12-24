import React from 'react';
import { useState, useEffect, useRef } from 'react';

import Speedometer from './components/speedometer';
import MotioButton from './components/motionButton';

import {AccountTextStyled, confettiStyle, MiningContainer, ContainerAccount, StyledConfirmButton, ContainerSubmit} from "./mining.style"

import confettiAnimation from '../../assets/lotties/confetti.json';
import coinAnimation from '../../assets/lotties/coin.json';
import transferCoinAnimation from '../../assets/lotties/transferCoin.json';
import Lottie from 'react-lottie';

import { useTheme, Theme } from '@mui/material/styles'; // Импортируйте Theme
import api from '../../api';

const confettiOptions = {
    loop: true,
    autoplay: true,
    animationData: confettiAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const coinOptions = {
    loop: true,
    autoplay: true,
    animationData: coinAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const transferCoinAnimations = {
    loop: true,
    autoplay: true,
    animationData: transferCoinAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const MiningPage = (): React.ReactElement => {
    const lottieRef = useRef(null);
    const theme = useTheme();

    const [countMining, setCountMining] = useState(0);
    const [stepMining, setStepMining] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(0);    
    const [isConvertBalance, setIsConvertBalance] = useState<boolean>(false);
    const stepDecrease = 0.007;
    const stepIncrease = 0.1;
    const maxProgress = 1.5;
    const timeDecrease = 10;
    const minStepMining = 1;
    const maxStepMining = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => Math.max(p - stepDecrease, 0));
            setIsVisible(Number(progress > 1));
            setStepMining(isVisible ? maxStepMining : minStepMining);
        }, timeDecrease);
        return () => clearInterval(interval);
    }, [progress, stepMining, isVisible]);

    const handleConfirmTopUp = () => {
        api.updateBalance(countMining)
            .then(() => {
                setIsConvertBalance(true);
                setCountMining(0);
            })
            .catch(err => {
                console.error('Ошибка запроса:', err);
            });
    };

    return (
        <>
            <MiningContainer>
                {isVisible ? (
                    <div className={confettiStyle}>
                        <Lottie ref={lottieRef} options={confettiOptions} height={'100%'} width={'100%'} />
                    </div>
                ) : (
                    <></>
                )}

                <ContainerAccount>
                    <div className="container">
                        <div className="card">
                            <div className="coin">
                                <Lottie options={coinOptions} height={'100%'} width={'100%'} />
                            </div>
                            <div className="account">
                                <AccountTextStyled> Account: {countMining}</AccountTextStyled>
                            </div>
                            <div className="coin">
                                <Lottie options={coinOptions} height={'100%'} width={'100%'} />
                            </div>
                        </div>
                    </div>
                </ContainerAccount>

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

                <ContainerSubmit>
                    <div className="container">
                        <div className="card">
                            <div className="coin">
                                <Lottie options={transferCoinAnimations} height={'100%'} width={'100%'} />
                            </div>
                            <div className="account">
                                <StyledConfirmButton theme={theme} onClick={handleConfirmTopUp}>Submit</StyledConfirmButton>
                            </div>
                            <div className="account">
                                <StyledConfirmButton theme={theme} onClick={handleConfirmTopUp}>promocode</StyledConfirmButton>                                
                            </div>
                            <div className="coin">
                                <Lottie options={transferCoinAnimations} height={'100%'} width={'100%'} />
                            </div>
                        </div>
                    </div>
                </ContainerSubmit>
            </MiningContainer>
        </>
    );
};

export default MiningPage;
