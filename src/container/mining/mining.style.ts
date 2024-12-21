import { css } from '@emotion/css';
import styled from '@emotion/styled';


export const AccountTextStyled = styled.h3`
    min-width: 250px;
    font-size: 2.25rem;
    font-weight: 400;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 0;
`;

export const confettiStyle = css`
    position: absolute;
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 5;
    pointer-events: none;
`;

export const MiningContainer = styled.div`
    position: relative;
`;

export const ContainerAccount = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        min-width: 400px;
        width: 400px;
        height: 60px;
        background: linear-gradient(to right, lightgray, darkblue); /* Градиент */
        border-radius: 20px; /* Закругленные края */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
        display: flex;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
        justify-content: center;
    }

    .card img {
        width: 40%;
        object-fit: cover;
    }

    .account {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .coin {
        z-index: 2;
    }
`;