import React, { useState, useEffect } from 'react';
import Speedometer from './components/Speedometer';
import MotioButton from './components/MotionButton';
import PromocodeForm from './components/PromocodeForm';

import {
    AccountTextStyled,
    GlobalContainer,
    TvContainer,
    danceStyle,
    confettiStyle,
    MiningContainer,
    ContainerAccount,
    StyledConfirmButton,
    ContainerSubmit
} from './mining.style';

import confettiAnimation from '../../assets/lotties/confetti.json';
import coinAnimation from '../../assets/lotties/coin.json';
import transferCoinAnimation from '../../assets/lotties/transferCoin.json';
import progDance from '../../assets/lotties/progDance.json';
import chillGuyVoid from '../../assets/lotties/chillGuyVoid.json';
import chillGuyFill from '../../assets/lotties/chillGuyFill.json';
import danceGrand from '../../assets/lotties/danceGrand.json';
import doctorDance from '../../assets/lotties/doctorDance.json';

import catmoney from '../../assets/lotties/catmoney.json';
import bigmonkey from '../../assets/lotties/bigmonkey.json';
import monkey from '../../assets/lotties/monkey.json';
import MJ from '../../assets/lotties/MJ.json';
import morty from '../../assets/lotties/morty.json';
import blackdancer from '../../assets/lotties/blackdancer.json';
import elephant from '../../assets/lotties/elephant.json';

import Lottie from 'react-lottie';

import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import api from '../../api';

import postmalone from '../../assets/music/Ilkay Sencan - Rockstar (ft. Dynoro).mp3';
import kuduro from '../../assets/music/kuduro.mp3';
import rihanna from '../../assets/music/rihanna.mp3';
import dragons from '../../assets/music/dragons.mp3';
import timberlake from '../../assets/music/timberlake.mp3';
import calvin from '../../assets/music/calvin.mp3';
import lusa from '../../assets/music/lusa.mp3';
import numb from '../../assets/music/numb.mp3';
import alleyes from '../../assets/music/DJ Belite - All Eyes On Me.mp3';
import night from '../../assets/music/mishlawi - all night.mp3';

import { toast } from 'react-toastify';


const catmoneyOptions = {
    loop: false,
    autoplay: false,
    animationData: catmoney,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const bigmonkeyOptions = {
    loop: false,
    autoplay: false,
    animationData: bigmonkey,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const monkeyOptions = {
    loop: false,
    autoplay: false,
    animationData: monkey,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const MJOptions = {
    loop: false,
    autoplay: false,
    animationData: MJ,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const mortyOptions = {
    loop: false,
    autoplay: false,
    animationData: morty,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const blackdancerOptions = {
    loop: false,
    autoplay: false,
    animationData: blackdancer,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const elephantOptions = {
    loop: false,
    autoplay: false,
    animationData: elephant,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


const danceGrandOptions = {
    loop: false,
    autoplay: false,
    animationData: danceGrand,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const doctorDanceOptions = {
    loop: false,
    autoplay: false,
    animationData: doctorDance,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


const progDanceOptions = {
    loop: false,
    autoplay: false,
    animationData: progDance,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const chillGuyVoidOptions = {
    loop: false,
    autoplay: false,
    animationData: chillGuyVoid,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const chillGuyFillOptions = {
    loop: false,
    autoplay: false,
    animationData: chillGuyFill,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
    isClickToPauseDisabled: true
};


const confettiOptions = {
    loop: false,
    autoplay: false,
    animationData: confettiAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
    isClickToPauseDisabled: true
};

const coinOptions = {
    loop: true,
    autoplay: true,
    animationData: coinAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
    isClickToPauseDisabled: true
};

const transferCoinAnimations = {
    loop: true,
    autoplay: true,
    animationData: transferCoinAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
    isClickToPauseDisabled: true
};


const MiningPage = (): React.ReactElement => {
    const theme = useTheme();

    const [countMining, setCountMining] = useState<number>(0);
    const [stepMining, setStepMining] = useState<number>(1);
    const [progress, setProgress] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isVisibleLvlTwo, setIsVisibleLvlTwo] = useState<boolean>(false);

    const musics = [numb, alleyes, kuduro, postmalone, rihanna,
        dragons, timberlake, calvin, lusa, night];
    const [currentMusic, setCurrentMusic] = useState(musics[0]);

    // discoOptions
    // coinsSubmitOptions

    const danceAnim = [progDanceOptions, chillGuyFillOptions,
        catmoneyOptions, bigmonkeyOptions, chillGuyVoidOptions, MJOptions, mortyOptions, blackdancerOptions,
        elephantOptions, monkeyOptions, danceGrandOptions, doctorDanceOptions
    ];
    const [curAnimNum, setNumAnimNum] = useState<number>(0);
    // const [curAnim, setNumAnim] = useState(danceAnim[0]);

    const stepDecrease = 0.007;
    const stepIncrease = 0.2;
    const maxProgress = 1.5;
    const timeDecrease = 10;
    const minStepMining = 1;
    const maxStepMining = 5;

    const handleMusicChange = () => {
        const randomIndex = Math.floor(Math.random() * musics.length);
        setCurrentMusic(musics[randomIndex]);

        setNumAnimNum(curAnimNum >= danceAnim.length - 1 ? 0 : curAnimNum + 1);

        toast.success('Music changed successfully!', {
            position: 'top-right',
            autoClose: 1000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'colored'
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => Math.max(p - stepDecrease, 0));

            if (progress >= 0.5 && progress < 1) {
                setIsVisible(true);
            } else if (progress >= 1) {
                setIsVisibleLvlTwo(true);
            }

            setStepMining(isVisibleLvlTwo ? maxStepMining : minStepMining);

        }, timeDecrease);
        return () => clearInterval(interval);
    }, [progress, stepMining, isVisible, isVisibleLvlTwo]);

    const handleConfirmTopUp = () => {
        api.updateBalance(countMining)
            .then(() => {
                setCountMining(0);
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
            <GlobalContainer>
                <TvContainer>
                    <div className={'tv-screen'}>
                        <div className={danceStyle}>
                            <Lottie
                                options={danceAnim[curAnimNum]}
                                height={'100%'}
                                width={'100%'}
                                isStopped={!isVisibleLvlTwo}
                                eventListeners={[
                                    {
                                        eventName: 'complete',
                                        callback: () => setIsVisibleLvlTwo(false)
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </TvContainer>
                <MiningContainer>

                    <div className={confettiStyle}>
                        <Lottie
                            options={confettiOptions}
                            height={'100%'}
                            width={'100%'}
                            isStopped={!isVisibleLvlTwo}
                            eventListeners={[
                                {
                                    eventName: 'complete',
                                    callback: () => setIsVisibleLvlTwo(false)
                                }
                            ]}
                        />
                    </div>
                    <div className={confettiStyle}>
                        <Lottie
                            options={confettiOptions}
                            height={'100%'}
                            width={'100%'}
                            isStopped={!isVisible}
                            eventListeners={[
                                {
                                    eventName: 'complete',
                                    callback: () => setIsVisible(false)
                                }
                            ]}
                        />
                    </div>

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
                        currentMusic={currentMusic}
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
                                        Promo
                                    </StyledConfirmButton>
                                </div>
                                <div className="account">
                                    <StyledConfirmButton theme={theme} onClick={handleMusicChange}>
                                        Music
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
                <TvContainer>
                    <div className={'tv-screen'}>
                        <div className={danceStyle}>
                            <Lottie
                                options={danceAnim[curAnimNum]}
                                height={'100%'}
                                width={'100%'}
                                isStopped={!isVisibleLvlTwo}
                                eventListeners={[
                                    {
                                        eventName: 'complete',
                                        callback: () => setIsVisibleLvlTwo(false)
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </TvContainer>
            </GlobalContainer>
        </>
    );
};

export default MiningPage;
