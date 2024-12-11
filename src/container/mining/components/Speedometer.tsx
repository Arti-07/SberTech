import  React from 'react';
import { useEffect } from 'react';
import { Wrapper, StyledSpeedometer } from './speedometer.style';

const Speedometer = ({turn}) => {

    const turnRef = React.useRef(null)
    const sliderRef = React.useRef(null)
    const progress = Math.max(Math.min(turn, 1), 0);

    useEffect(() => {
        turnRef.current.style.transform = `rotate(${progress/2}turn)`
        sliderRef.current.style.transform = `rotate(${progress/2+0.25}turn)`
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
                        <h3>{Math.round(progress * 100)}%</h3>
                    </div>
                </div>
            </StyledSpeedometer>
        </Wrapper>
    )
}

export default Speedometer;