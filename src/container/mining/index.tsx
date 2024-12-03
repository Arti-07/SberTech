import  React from 'react';
import { useState, useEffect } from 'react';

import Babah from './components/Babah';
import ProgressBar from './components/ProgressBar';
import MotioButton from './components/MotionButton';

import { containerCenterStyle } from './components/ContainerCenter.style'

import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`

export const StyledSpeedometer = styled.div`
    width: 100%;
    max-width: 450px;
    margin-top: 3rem;
    .guage_body {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background: #000;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        position: relative;
        overflow: hidden;
    }
    
    .guage_body_fill {
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: 100%;
        background: #000;
        transform-origin: center top;
        transform: rotate(0.1turn);
        transition: transform;
    }

    .guage_indicator {
        position: absolute;
        width: 225px;
        height: 225px;
        top: 125%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: center top;
        transform: rotate(0.3turn);
        border-radius: 50%;
        background: #000;
        z-index: 7;
        &::before {
        }
    }

    .guage_indicator_slider {
        width: 4px;
        height: 22rem;
        background-color: #000;
        transform-origin: center;
        transform: rotate(0.1turn);
        transition: transform;
        margin-bottom: 1rem;
    }

    .guage_body_cover {
        width: 97%;
        height: 200%;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text_content {
        position: absolute;
        top: 0;
        background-color: #000;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 55;

        h3 {
            font-size: 2.25rem;
            font-weight: 400;
            color: #fff;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        p {
            font-size: 1rem;
            font-weight: 300;
            color: #fff;
            text-align: center;
            padding: 0;
            margin: 0;
        }
    }
    
`

const Speedometer = ({turn}) => {

    const turnRef = React.useRef(null)
    const sliderRef = React.useRef(null)

    useEffect(() => {
        turnRef.current.style.transform = `rotate(${turn/2}turn)`
        sliderRef.current.style.transform = `rotate(${Math.min(turn, 0.99)/2+0.25}turn)`
    }, [turn])

    return (
        <Wrapper>
            <StyledSpeedometer>
                <div className="guage_body">
                <div className="guage_body_fill" ref={turnRef} />
                <div className="guage_body_cover">
                    <div className="guage_indicator_slider" ref={sliderRef} />
                </div>
                    <div className="guage_indicator" />
                    <div className="text_content">
                        <h3>{Math.round(turn * 100) / 100}</h3>
                        <p>Mbps</p>
                    </div>
                </div>
            </StyledSpeedometer>
        </Wrapper>
    )
}

const MiningPage = (): React.ReactElement => {

    const [countMining, setCountMining] = useState(0)
    const [stepMining, setStepMining] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(0)
    
    // create a state to store the speed
    const [speed, setSpeed] = useState(0)

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
            <Speedometer turn={progress}/>
            <div className={containerCenterStyle}>
                <h1>{countMining}</h1>
            </div>
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

