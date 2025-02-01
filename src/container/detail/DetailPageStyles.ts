import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material';

const getStyles = (theme) => ({
    PageContainer: styled.div`
        display: flex;
        background-color: ${theme.palette.mode === 'dark' ? 'rgba(30, 30, 42, 0.9)' : 'rgba(121, 121, 147, 0.9)'};
        color: ${theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};
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
    `,
    ChartContainer: styled.div`
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
    `,
    InfoContainer: styled.div`
        flex: 1;
        background-color: ${theme.palette.mode === 'dark' ? 'rgba(30, 30, 42, 0.9)' : '#9494B3'};
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
        border: 1px solid ${theme.palette.mode === 'dark' ? '#c9ffe5' : '#2e7d32'};

    h2 {
        color: ${theme.palette.mode === 'dark' ? '#cfcfcf' : '#333333'};
        font-family: Verdana, sans-serif;
    }

        p,
        ul {
            font-family: Verdana, sans-serif;
            color: ${theme.palette.mode === 'dark' ? '#cfcfcf' : '#333333'};
        }

        .price {
            color: ${theme.palette.mode === 'dark' ? '#c9ffe5' : '#2e7d32'};
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
    `,
    CryptoLink: styled.a`
        display: inline-block;
        padding: 10px 20px;
        background-color: ${theme.palette.mode === 'dark' ? '#47485A' : 'rgba(71, 72, 90, 0.6)'};
        color: ${theme.palette.mode === 'dark' ? '#121212' : '#ffffff'};
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        font-size: 0.9rem;

        &:hover {
            background-color: ${theme.palette.mode === 'dark' ? '#2E2E3A' : 'rgba(71, 72, 90, 0.8)'};
        }

        @media (max-width: 768px) {
            font-size: 0.85rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
            padding: 8px 16px;
        }
    `,
    ChartTitle: css`
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        color: ${theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }

        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
    `,
    SecondChart: css`
        background-color: ${theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff'};
        border-radius: 8px;
        margin-top: 20px;

        .recharts-cartesian-grid line {
            stroke: ${theme.palette.mode === 'dark' ? '#444' : '#ddd'};
        }

        .recharts-x-axis,
        .recharts-y-axis {
            line,
            text {
                stroke: ${theme.palette.mode === 'dark' ? '#ccc' : '#666'};
            }
        }

        .recharts-tooltip {
            background-color: ${theme.palette.mode === 'dark' ? '#333' : '#fff'} !important;
            border: none !important;
            color: ${theme.palette.mode === 'dark' ? '#fff' : '#000'} !important;
        }

        .recharts-legend-wrapper {
            color: ${theme.palette.mode === 'dark' ? '#fff' : '#000'} !important;
        }
    `,
});

export const useDetailPageStyles = () => {
    const theme = useTheme();
    return getStyles(theme);
};