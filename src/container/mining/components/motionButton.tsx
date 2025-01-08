import React from 'react';
import { motion } from 'framer-motion';
import { motionButtonStyle } from './motionButton.style';
import { ContainerCenterStyle } from './containerCenter.style';
import { useTheme } from '@mui/material/styles'; // Импортируйте Theme

import Lottie from 'react-lottie';
import bigCoinAnimation from '../../../assets/lotties/bigCoin.json';

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
}

const MotioButton: React.FC<MinigButtonProps> = ({
    progress,
    setProgress,
    countMining,
    stepMining,
    setCountMining,
    stepIncrease,
    maxProgress
}): React.ReactElement => {
    const theme = useTheme();

    return (
        <>
            <ContainerCenterStyle>
                <motion.div
                    className={motionButtonStyle}
                    style={{
                        background: theme.palette.mode === 'dark' ? '#2F4F4F' : '#007bff'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 800, damping: 10 }}
                    onTap={() => {
                        setProgress(Math.min(progress + stepIncrease, maxProgress));
                        setCountMining(countMining + stepMining);
                    }}
                >
                    <div>
                        <Lottie options={bigCoinOptions} height={'100%'} width={'100%'} />
                    </div>
                </motion.div>
            </ContainerCenterStyle>
        </>
    );
};

export default MotioButton;
