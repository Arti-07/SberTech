import  React from 'react';
import { useState, useEffect } from 'react';

import Redbutton from './components/Redbutton';

import "./scroll_styles.css";
// import { LoremIpsum } from "./components/LoremIpsum";

import "./button_styles.css";
import { motion, motionValue } from "framer-motion";

import "./tank_styles.css";
function Tank() {
    return (
    <div className="tank">        
        <div className="bottom"></div>
        <div className="middle"></div>
        <div className="top"></div>
    </div>
    )
};

function Babah() {
    return (
        <h1> БАБАХ </h1>
    )
};

const MiningPage = (): React.ReactElement => {

    const [countMining, setCountMining] = useState(0)
    const [progress, setProgress] = useState(0.01)
    const [babah, setBabah] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setProgress( Math.max(progress - 0.0025, 0.01) );            
            setBabah( Number(progress > 1) );
        }, 10);
        
        // Очистка интервала при размонтаже компонента
        return () => clearInterval(interval);
    }, [progress, babah]);

        
    return (
        <>
            <motion.div
            className="progress-bar"
            style={{ scaleX: progress }}
            />
            <motion.div style={{ opacity: babah }}>
                <Babah />
            </motion.div>
            <h1>{countMining}</h1>
            <div className="button-container">
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 800, damping: 10 }}
                    onTap={() => {
                        setProgress(Math.min(progress+0.05, 1.1));
                        setCountMining(c => c + (babah ? 5 : 1));
                    }}
                />
            </div>
        </>
    );
};

export default MiningPage;


// const { scrollYProgress } = useScroll();
// return (
//     <>
//         <motion.div
//         className="progress-bar"
//         style={{ scaleX: scrollYProgress }}
//         />
//         <h1>
//         <code>useScroll</code> demo
//         </h1>
//         <LoremIpsum />
//     </>
//     );
