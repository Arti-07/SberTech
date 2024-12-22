import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div style={styles.container}>
            <button
                onClick={handlePrevious}
                style={styles.button}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span style={styles.pageInfo}>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                style={styles.button}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

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
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
    },
    pageInfo: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
};

export default Pagination;
