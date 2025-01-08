import React from 'react';
import { useState, useEffect, useRef } from 'react';

import Speedometer from './components/speedometer';
import MotioButton from './components/motionButton';
import PromocodeForm from './components/promocodeForm';

import {
    AccountTextStyled,
    confettiStyle,
    MiningContainer,
    ContainerAccount,
    StyledConfirmButton,
    ContainerSubmit
} from './mining.style';

import confettiAnimation from '../../assets/lotties/confetti.json';
import coinAnimation from '../../assets/lotties/coin.json';
import transferCoinAnimation from '../../assets/lotties/transferCoin.json';
import Lottie from 'react-lottie';

import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Импортируйте Theme
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

    const [countMining, setCountMining] = useState<number>(0);
    const [stepMining, setStepMining] = useState<number>(1);
    const [progress, setProgress] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<number>(0);

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
                setCountMining(0);
            })
            .catch((err) => {
                console.error('Ошибка запроса:', err);
            });
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                                <StyledConfirmButton theme={theme} onClick={handleConfirmTopUp}>
                                    Submit
                                </StyledConfirmButton>
                            </div>
                            <div className="account">
                                <StyledConfirmButton theme={theme} onClick={handleClickOpen}>
                                    Promo code
                                </StyledConfirmButton>
                            </div>
                            <div className="coin">
                                <Lottie options={transferCoinAnimations} height={'100%'} width={'100%'} />
                            </div>
                        </div>
                    </div>
                </ContainerSubmit>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Promo code</DialogTitle>
                    <DialogContent>
                        <PromocodeForm />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} style={{ color: '#1E1E2A' }}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </MiningContainer>
        </>
    );
};

export default MiningPage;
