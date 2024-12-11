import  React from 'react';
import { motion } from "framer-motion";
import { containerCenterStyle } from './containerCenter.style'

const Babah = (): React.ReactElement => {
    
    return (
        <div className={containerCenterStyle}>
            <motion.div>
                <h1> БАБАХ </h1>
            </motion.div>
        </div>
    );
};

export default Babah;