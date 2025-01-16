import styled from '@emotion/styled';
import 'react-toastify/dist/ReactToastify.css';

export const CardStyledContainer = styled.div<{ background: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: ${({ background }) => background};
    max-width: 400px;
    margin: 0 auto;
    transition: background 0.3s ease-in-out;
`;

export const CardField = styled.input`
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 10px;
    width: 100%;
    font-size: 1rem;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
`;

export const ErrorText = styled.span`
    color: #e63946;
    font-size: 0.9rem;
    margin-top: -10px;
    text-align: center;
`;

export const CardHint = styled.div`
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    margin-top: -10px;
`;
