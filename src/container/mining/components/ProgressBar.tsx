import  React from 'react';
import { motion } from "framer-motion";
import { progressBarStyle } from './ProgressBar.style';

const ProgressBar = ({ progress }): React.ReactElement => {
    
    return (
        <>
            <motion.div
            className={progressBarStyle}
            style={{ scaleX: progress }}
            />
        </>
    );
};

export default ProgressBar;