import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useTheme, Theme } from '@mui/material/styles'; // Импортируйте Theme


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
    overflow: hidden;
`;

export const ContainerAccount = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
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
        justify-content: space-between;
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


export const ContainerSubmit = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
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
        user-select: none;
        justify-content: space-between;
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
        pointer-events: none;
        z-index: 2;
    }
`;

export const StyledConfirmButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#2F4F4F' : '#007bff'};
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 10px ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: ${({ theme }: { theme: Theme }) => theme.palette.mode === 'dark' ? '#45a049' : '#0056b3'};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;