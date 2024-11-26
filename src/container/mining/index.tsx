import React from 'react';
import Redbutton from './components/Redbutton';

import "./styles.css";
import { motion } from 'framer-motion'

const MiningPage = (): React.ReactElement => {
    return (
        <>
            {/* <Redbutton /> */}

            {/* <motion.div className="box" animate={{ x: 100 }} /> */}
            <motion.div className="box" 
                drag 
                dragConstraints={{ top: 100, left: 0, right: 300, bottom: 400 }}
                whileDrag={{ scale: 0.9 }}
                animate={{                    
                    scale: 2,
                    transition: { 
                        duration: 2
                    }
                }} 
            />

            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 800, damping: 10 }}
            />
        </>
    );
};

export default MiningPage;
