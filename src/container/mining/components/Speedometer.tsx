import React from 'react';
import { useEffect } from 'react';
import { Wrapper, StyledSpeedometer } from './speedometer.style';
import { useTheme } from '@mui/material/styles';

const Speedometer = ({ turnAngle }: { turnAngle: number }) => {
    const theme = useTheme();
    const turnRef = React.useRef(null);
    const sliderRef = React.useRef(null);
    const minAngle = 0;
    const maxAngle = 1;
    turnAngle = Math.max(Math.min(turnAngle, maxAngle), minAngle);
    const progress = Math.round(turnAngle * 100);

    useEffect(() => {
        turnRef.current.style.transform = `rotate(${turnAngle / 2}turn)`;
        sliderRef.current.style.transform = `rotate(${turnAngle / 2 + 0.25}turn)`;
    }, [turnAngle]);

    return (
        <Wrapper>
            <StyledSpeedometer theme={theme}>
                <div className="guage_body">
                    <div className="guage_body_fill" ref={turnRef} />
                    <div className="guage_body_cover">
                        <div className="guage_indicator_slider" ref={sliderRef} />
                    </div>
                    <div className="guage_indicator" />
                    <div className="text_content">
                        <h3>{progress}%</h3>
                    </div>
                </div>
            </StyledSpeedometer>
        </Wrapper>
    );
};

export default Speedometer;
