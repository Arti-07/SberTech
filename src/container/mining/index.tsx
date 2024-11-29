import  React from 'react';
import { useState, useEffect } from 'react';

import Redbutton from './components/Redbutton';

// import "./styles.css";
// import { LoremIpsum } from "./components/LoremIpsum";

import "./button_styles.css";
import { motion, useScroll } from "framer-motion";

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


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
        setCount(c => c + 1);
        }, 100);
        return () => clearInterval(id);
    }, []);

    return <h1>{count}</h1>;
}


const MiningPage = (): React.ReactElement => {
        
    return (
        <>
            <Tank />
            <Counter />
            <Redbutton />
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
