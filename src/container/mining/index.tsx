import  React from 'react';
import { useState, useEffect } from 'react';

import Babah from './components/Babah';
import Speedometer from './components/Speedometer';
import MotioButton from './components/MotionButton';

import { containerCenterStyle } from './components/ContainerCenter.style'
import { Global, css } from '@emotion/react'


const MiningPage = (): React.ReactElement => {

    const [countMining, setCountMining] = useState(0)
    const [stepMining, setStepMining] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(0)
    
    // create a state to store the speed
    const [speed, setSpeed] = useState(0)

    useEffect(() => {        
        const interval = setInterval(() => {
            setProgress(p => Math.max(p - 0.007, 0) );            
            setIsVisible(Number(progress > 1) );
            setStepMining(isVisible ? 5 : 1);
        }, 10); 
        return () => clearInterval(interval);
    }, [progress, stepMining, isVisible]);
    
    return (
        <>
            <div className={containerCenterStyle}>
                <h1>Счет: {countMining}</h1>                
            </div>            
            <Global
            styles={css`
                body {
                    position: fixed;
                    width: 100%;
                    overflow-y: scroll;
                }
            `}
            />            
            <Speedometer turn={progress} />
            <MotioButton
            progress={progress}
            setProgress={setProgress} 
            countMining={countMining}
            stepMining={stepMining}
            setCountMining={setCountMining} 
            />
            <div className={containerCenterStyle}>
            {isVisible ? (
                    <Babah/>
                ) : (
                    <></>
                )
            }
            </div>
        </>
    );
};

export default MiningPage;

