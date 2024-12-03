import  React from 'react';
import { motion } from "framer-motion";
import { Global } from "@emotion/react"
import { motionButtonStyle } from './MotionButton.style';
import { containerCenterStyle } from './ContainerCenter.style'

const MotioButton = ({ progress, setProgress, countMining, stepMining, setCountMining}): React.ReactElement => {
    return (
        <>
        <div className={containerCenterStyle}>
            <motion.div
                className={motionButtonStyle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 800, damping: 10 }}
                onTap={() => {
                    setProgress(Math.min(progress+0.1, 1.1));
                    setCountMining(countMining + stepMining);
                }}
            />
        </div>
    </>
    )
};

export default MotioButton;