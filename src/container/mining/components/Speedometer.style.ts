
import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`

export const StyledSpeedometer = styled.div`
    width: 100%;
    max-width: 450px;
    .guage_body {
        margin-top: 5%;
        margin-bottom: 5%;
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
        background: #00D;
        transform-origin: center top;
        transform: rotate(0.1turn);
        transition: transform;
        z-index: 3;
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
        width: 2%;
        height: 95%;
        background-color: #000;
        transform-origin: center;
        transform: rotate(0.1turn);
        transition: transform;
        margin-bottom: 0%;
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
        z-index: 4;
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