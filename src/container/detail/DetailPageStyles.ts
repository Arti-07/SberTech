import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PageContainer = styled.div`
    display: flex;
    background-color: #121212;
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    flex-wrap: wrap; 

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        flex-direction: column; 
        padding: 10px;
    }
`;

export const ChartContainer = styled.div`
    flex: 2;
    margin-right: 20px;

    @media (max-width: 768px) {
        flex: 1;
        margin-right: 0;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
    }
`;

export const InfoContainer = styled.div`
    flex: 1;
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    border: 1px solid #90caf9;

    h2 {
        color: #90caf9;
    }

    p,
    ul {
        color: #cfcfcf;
    }

    .price {
        color: #c9ffe5;
        font-weight: bold;
    }

    ul {
        list-style-type: none;
        padding: 0;

        li {
            margin-bottom: 8px;
        }
    }

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

export const CryptoLink = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: #90caf9;
    color: #121212;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    font-size: 0.9rem;

    &:hover {
        background-color: #6fabd8;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 8px 16px;
    }
`;

export const ChartTitle = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    color: #ffffff;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;
