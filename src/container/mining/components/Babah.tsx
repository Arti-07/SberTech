import  React from 'react';
import { motion } from "framer-motion";
import { containerCenterStyle } from './ContainerCenter.style'

const Babah = (props): React.ReactElement => {
    
    return (
        <div className={containerCenterStyle}>
            <motion.div style={{ opacity: props.opacity }}>
                <h1> БАБАХ </h1>
            </motion.div>
        </div>
    );
};

export default Babah;