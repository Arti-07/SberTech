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
};

export default styles;
