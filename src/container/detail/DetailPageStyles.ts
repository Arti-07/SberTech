import {css} from '@emotion/react';
import styled from '@emotion/styled'

export const PageContainer = styled.div`
    display: flex;
    background-color: #121212;
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
`;

export const ChartContainer = styled.div`
    flex: 2;
    margin-right: 20px;
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
`;

export const ChartTitle = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    color: #ffffff;
`;