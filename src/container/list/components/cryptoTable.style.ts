const styles = {
    container: {
        backgroundColor: 'rgba(30, 30, 42, 0.9)',
        color: '#FFFFFF',
        fontFamily: 'Verdana, sans-serif',
        padding: '20px',
        borderRadius: '8px',
    },
    searchInput: {
        marginBottom: '15px',
        padding: '8px',
        border: '1px solid #797993',
        backgroundColor: '#1E1E2A',
        color: '#FFFFFF',
        borderRadius: '5px',
        width: '100%',
    },
    tableContainer: {
        overflowY: 'auto',
        maxHeight: '400px',
        marginTop: '10px',
        borderRadius: '5px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#444444 #1e1e2a',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse' as const,
    },
    th: {
        textAlign: 'left' as const,
        padding: '12px',
        backgroundColor: '#1E1E2A',
        cursor: 'pointer',
        borderBottom: '1px solid #797993',
        color: '#FFFFFF',
    },
    td: {
        textAlign: 'left' as const,
        padding: '12px',
        borderBottom: '1px solid #797993',
    },
    evenRow: {
        backgroundColor: 'rgba(121, 121, 147, 0.1)',
    },
    changeUp: {
        color: '#4caf50',
        fontWeight: 'bold' as const,
    },
    changeDown: {
        color: '#f44336',
        fontWeight: 'bold' as const,
    },
    '@global': {
        '::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: '#1E1E2A',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#444444',
            borderRadius: '10px',
            border: '2px solid #1E1E2A',
        },
        '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#666666',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: '#1E1E2A',
            borderRadius: '10px',
        },
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
        gap: '5px',
    },
    pageButton: {
        padding: '8px 12px',
        backgroundColor: '#1E1E2A',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        minWidth: '36px',
        textAlign: 'center',
    },
    activePageButton: {
        backgroundColor: '#4caf50',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    dots: {
        padding: '8px 12px',
        color: '#888888',
        textAlign: 'center',
    },


};

export default styles;