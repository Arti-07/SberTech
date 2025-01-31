const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        margin: '0 10px',
        cursor: 'pointer',
        backgroundColor: 'rgba(71, 72, 90, 0.6)',
        color: '#fff',
        border: 'none',
        borderRadius: '20px',
        transition: 'all 0.3s ease',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonHover: {
        backgroundColor: 'rgba(71, 72, 90, 0.8)',
        transform: 'scale(1.05)',
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
    },
    buttonActive: {
        backgroundColor: 'rgba(71, 72, 90, 1)',
        transform: 'scale(0.95)',
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
    },
    buttonDisabled: {
        cursor: 'not-allowed',
        opacity: 0.6,
    },
};

export default styles;