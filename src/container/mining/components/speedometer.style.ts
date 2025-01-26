import styled from '@emotion/styled';


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledSpeedometer = styled.div`
    aspect-ratio: 2 / 1;
    width: 400px;
    min-width: 400px;

    .guage_body {
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 0%;
        margin-bottom: 0%;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        overflow: hidden;
        background: #8a0402;
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
        background: darkblue;
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
        z-index: 3;

        background-color: rgb(238, 163, 211);
        background-size: 150% 150%;
        background-image: radial-gradient(30% 40% at 65% 70%, rgb(192, 88, 254) 1%, rgba(192, 88, 254, 0) 100%), radial-gradient(30% 40% at 68% 45%, rgb(255, 57, 44) 1%, rgba(255, 57, 44, 0) 100%), radial-gradient(30% 40% at 38% 25%, rgb(255, 138, 53) 1%, rgba(255, 138, 53, 0) 100%), radial-gradient(60% 60% at 37% 68%, rgb(255, 125, 251) 1%, rgba(255, 125, 251, 0) 100%);
        transform: scale(1);
        animation-timeline: auto;
        animation-range-start: normal;
        animation-range-end: normal;
        background-position: 0px 0px;
        animation: 5s ease-in-out 0s infinite normal none running body-gradient;
    }

    @keyframes body-gradient {
        0% {
            background-position: 0% 0%
        }
        25% {
            background-position: 100% 0%
        }
        50% {
            background-position: 100% 100%
        }
        75% {
            background-position: 0% 100%
        }
        to {
            background-position: 0% 0%
        }
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
        background: #8a0402;
        z-index: 3;
    }

    .text_content {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
        background-color: #8a0402;
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

`;
