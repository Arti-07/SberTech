import  React from 'react';
import { useState, useEffect } from 'react';

import Babah from './components/Babah';
import ProgressBar from './components/ProgressBar';
import MotioButton from './components/MotionButton';


const MiningPage = (): React.ReactElement => {

    const [countMining, setCountMining] = useState(0)
    const [stepMining, setStepMining] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(0)

    useEffect(() => {        
        const interval = setInterval(() => {
            setProgress(p => Math.max(p - 0.0025, 0) );            
            setIsVisible(Number(progress > 1) );
            setStepMining(isVisible ? 5 : 1);
        }, 10); 
        return () => clearInterval(interval);
    }, [progress, stepMining, isVisible]);
    
    return (
        <>
            <Babah opacity={ isVisible }/>
            <ProgressBar progress={ progress } />
            <MotioButton
            progress={progress}
            setProgress={setProgress} 
            countMining={countMining}
            stepMining={stepMining}
            setCountMining={setCountMining} 
            />
        </>
    );
};

export default MiningPage;

