import React, { useState } from 'react';
import styles from './pagination.style';

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
    const [isHoveredPrev, setIsHoveredPrev] = useState(false);
    const [isActivePrev, setIsActivePrev] = useState(false);
    const [isHoveredNext, setIsHoveredNext] = useState(false);
    const [isActiveNext, setIsActiveNext] = useState(false);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    const getButtonStyle = (isHovered: boolean, isActive: boolean, isDisabled: boolean) => {
        let style = { ...styles.button };

        if (isDisabled) {
            style = { ...style, ...styles.buttonDisabled };
        } else {
            if (isHovered) {
                style = { ...style, ...styles.buttonHover };
            }
            if (isActive) {
                style = { ...style, ...styles.buttonActive };
            }
        }

        return style;
    };

    return (
        <div style={styles.container}>
            <button
                onClick={handlePrevious}
                style={getButtonStyle(isHoveredPrev, isActivePrev, currentPage === 1)}
                disabled={currentPage === 1}
                onMouseEnter={() => setIsHoveredPrev(true)}
                onMouseLeave={() => setIsHoveredPrev(false)}
                onMouseDown={() => setIsActivePrev(true)}
                onMouseUp={() => setIsActivePrev(false)}
            >
                Previous
            </button>
            <button
                onClick={handleNext}
                style={getButtonStyle(isHoveredNext, isActiveNext, false)}
                onMouseEnter={() => setIsHoveredNext(true)}
                onMouseLeave={() => setIsHoveredNext(false)}
                onMouseDown={() => setIsActiveNext(true)}
                onMouseUp={() => setIsActiveNext(false)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;