
import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledSpeedometer = styled.div`
    width: 350px;
    height: 175px;
    min-width: 350px;
    min-height: 175px;
    margin-top: 2%;
    margin-bottom: 10%;

    .guage_body {
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 0%;
        margin-bottom: 0%;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        overflow: hidden;
        background: chocolate;
    }
    
    .guage_body_fill {
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: 100%;
        transform-origin: center top;
        transform: rotate(0turn);
        transition: transform;
        z-index: 1;
        background: #00D;
    }

    .guage_body_cover {
        position: absolute;
        top: 4%;
        left: 2%;
        width: 96%;
        height: 192%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        background: #fff;
    }

    .guage_indicator_slider {
        position: absolute;
        width: 2%;
        height: 45%;
        left: 50%;
        top: 50%;
        background-color: #000;
        transform-origin: center top;
        transform: rotate(0.0turn);
        transition: transform;
        margin: 0%;
    }

    .guage_indicator {
        position: absolute;
        width: 50%;
        height: 100%;
        top: 50%;
        left: 25%;
        border-radius: 50%;
        background: chocolate;
        z-index: 3;
        &::before {
        }
    }

    .text_content {
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;        
        background-color: chocolate;
        user-select: none;

        h3 {
            font-size: 2.25rem;
            font-weight: 400;
            color: #fff;
            text-align: center;
            margin: 0;
            padding: 0;
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