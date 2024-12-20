import  React from 'react';
import { motion } from "framer-motion";
import { motionButtonStyle } from './motionButton.style';
import { containerCenterStyle } from './containerCenter.style'

const MotioButton = ({ progress, setProgress, countMining, stepMining, setCountMining, stepIncrease, maxProgress}): React.ReactElement => {
    return (
        <>
        <div className={containerCenterStyle}>
            <motion.div
                className={motionButtonStyle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 800, damping: 10 }}
                onTap={() => {
                    setProgress(Math.min(progress + stepIncrease, maxProgress));
                    setCountMining(countMining + stepMining);
                }}
            />
        </div>
    </>
    )
};

export default MotioButton;
