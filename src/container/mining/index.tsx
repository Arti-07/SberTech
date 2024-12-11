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
            <Global
            styles={css`
                body {
                    position: fixed;
                    width: 100%;
                }
            `}
            />            
            <div className={containerCenterStyle}>
                <AccountTextStyled> Счет: {countMining}</AccountTextStyled>                
            </div>
            <Speedometer turn={progress} />
            <MotioButton
            progress={progress}
            setProgress={setProgress} 
            countMining={countMining}
            stepMining={stepMining}
            setCountMining={setCountMining} 
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

