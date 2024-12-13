import  React from 'react';
import { useState, useEffect } from 'react';

import Babah from './components/babah';
import Speedometer from './components/speedometer';
import MotioButton from './components/motionButton';

import { containerCenterStyle } from './components/containerCenter.style'
import { Global, css } from '@emotion/react'
import styled from "@emotion/styled";

const AccountTextStyled = styled.h3`
    min-width: 200px;
    font-size: 2.25rem;
    font-weight: 400;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 0;
`;

const MiningPage = (): React.ReactElement => {

    const [countMining, setCountMining] = useState(0)
    const [stepMining, setStepMining] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(0)
    const stepDecrease = 0.007;
    const stepIncrease = 0.1;
    const maxProgress = 1.5;
    const timeDecrease = 10;
    const minStepMining = 1;
    const maxStepMining = 5;
    
    useEffect(() => {        
        const interval = setInterval(() => {
            setProgress(p => Math.max(p - stepDecrease, 0) );            
            setIsVisible(Number(progress > 1) );
            setStepMining(isVisible ? maxStepMining : minStepMining);
        }, timeDecrease); 
        return () => clearInterval(interval);
    }, [progress, stepMining, isVisible]);
    
    return (
        <>
            <Global
            styles={css`
                body {
                    position: fixed;
                    width: 100%;
                }
            `}
            />            
            <div className={containerCenterStyle}>
                <AccountTextStyled> Account: {countMining}</AccountTextStyled>                
            </div>
            <Speedometer turnAngle={progress} />
            <MotioButton
                progress={progress}
                setProgress={setProgress} 
                countMining={countMining}
                stepMining={stepMining}
                setCountMining={setCountMining} 
                stepIncrease={stepIncrease}
                maxProgress={maxProgress}
            />
            {isVisible ? (
                <div className={containerCenterStyle}>
                    <Babah/>
                </div>
                ) : (
                    <></>
                )
            }
        </>
    );
};

export default MiningPage;

