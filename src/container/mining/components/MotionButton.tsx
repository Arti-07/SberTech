import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { motionButtonStyle } from './motionButton.style';
import { ContainerCenterStyle } from './containerCenter.style';
import { useTheme } from '@mui/material/styles';

import Lottie from 'react-lottie';
import bigCoinAnimation from '../../../assets/lotties/bigCoin.json';
import AudioController from './utils/audioController';

const bigCoinOptions = {
    loop: true,
    autoplay: true,
    animationData: bigCoinAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

interface MinigButtonProps {
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    countMining: number;
    stepMining: number;
    setCountMining: React.Dispatch<React.SetStateAction<number>>;
    stepIncrease: number;
    maxProgress: number;
    currentMusic: string;
}

const MotioButton: React.FC<MinigButtonProps> = ({
                                                     progress,
                                                     setProgress,
                                                     countMining,
                                                     stepMining,
                                                     setCountMining,
                                                     stepIncrease,
                                                     maxProgress,
                                                     currentMusic
                                                 }): React.ReactElement => {
    const theme = useTheme();
    const audioControllerRef = useRef<AudioController | null>(null);

    useEffect(() => {
        if (audioControllerRef.current) {
            audioControllerRef.current.reset();
        }
        audioControllerRef.current = new AudioController(currentMusic);

        return () => {
            if (audioControllerRef.current) {
                audioControllerRef.current.reset();
            }
        };
    }, [currentMusic]);

    const calculateProgress = (currentProgress: number): number => {
        return Math.min(currentProgress + stepIncrease, maxProgress);
    };

    const handleTap = () => {
        if (audioControllerRef.current) {
            audioControllerRef.current.play();
            audioControllerRef.current.cancelReset();
        }
        setProgress(calculateProgress(progress));
        setCountMining(countMining + stepMining);
    };

    const handleRelease = () => {
        if (audioControllerRef.current) {
            audioControllerRef.current.scheduleReset(1000);
        }
    };

    return (
        <ContainerCenterStyle>
            <motion.div
                className={motionButtonStyle}
                style={{
                    background: theme.palette.mode === 'dark' ? '#2F4F4F' : '#007bff'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 800, damping: 10 }}
                onTapStart={handleTap}
                onTap={handleRelease}
            >
                <div>
                    <Lottie options={bigCoinOptions} height="100%" width="100%" />
                </div>
            </motion.div>
        </ContainerCenterStyle>
    );
};

export default MotioButton;

