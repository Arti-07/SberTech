import React from 'react';
import loaderAnimation from '../../../../assets/lotties/loader.json';
import { Theme } from '@mui/material';

export const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const getStyles = (theme: Theme) => ({
    container: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 42, 0.9)' : 'rgba(121, 121, 147, 0.9)',
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
        fontFamily: 'Verdana, sans-serif',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: theme.palette.mode === 'dark' ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    searchInput: {
        marginBottom: '15px',
        padding: '8px',
        border: `1px solid ${theme.palette.mode === 'dark' ? '#797993' : '#E0E0E0'}`,
        backgroundColor: theme.palette.mode === 'dark' ? '#1E1E2A' : '#F5F5F5',
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
        borderRadius: '5px',
        width: '100%',
    },
    tableContainer: {
        maxHeight: 'none',
        overflowY: 'visible',
        marginTop: '10px',
        borderRadius: '5px',
        scrollbarWidth: 'thin',
        scrollbarColor: theme.palette.mode === 'dark' ? '#444444 #1e1e2a' : '#888888 #F5F5F5',
    } as React.CSSProperties,
    table: {
        width: '100%',
        borderCollapse: 'collapse' as const,
    },
    th: {
        textAlign: 'left' as const,
        fontWeight: 'bold',
        padding: '12px',
        backgroundColor: theme.palette.mode === 'dark' ? '#1E1E2A' : 'rgba(71, 72, 90, 0.6)',
        cursor: 'pointer',
        borderBottom: `2px solid ${theme.palette.mode === 'dark' ? '#797993' : '#BDBDBD'}`,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
    },
    td: {
        textAlign: 'left' as const,
        fontWeight: 'bold',
        padding: '12px',
        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#797993' : '#E0E0E0'}`,
        color: '#FFFFFF',
    },
    evenRow: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(121, 121, 147, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    },
    tableRow: {
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
    },
    tableRowHover: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    },
    changeUp: {
        color: theme.palette.mode === 'dark' ? '#4caf50' : '#00cc00',
        fontWeight: 'bold' as const,
    },
    changeDown: {
        color: theme.palette.mode === 'dark' ? '#f44336' : '#c2002a',
        fontWeight: 'bold' as const,
    },
    pageButton: {
        padding: '8px 12px',
        backgroundColor: theme.palette.mode === 'dark' ? '#1E1E2A' : '#E0E0E0',
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        minWidth: '36px',
        textAlign: 'center',
        transition: 'background-color 0.2s ease',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? '#2E2E3A' : '#D0D0D0',
        },
    },
    activePageButton: {
        backgroundColor: '#4caf50',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    dots: {
        padding: '8px 12px',
        color: theme.palette.mode === 'dark' ? '#888888' : '#666666',
        textAlign: 'center',
    },
});