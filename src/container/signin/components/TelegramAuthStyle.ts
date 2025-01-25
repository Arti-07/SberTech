import styled from '@emotion/styled';

export const CardStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    max-width: 350px;
    margin: 50px auto;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

export const InputField = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    transition: border-color 0.2s;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

export const Button = styled.button`
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;

    &:hover {
        background: #0056b3;
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.span`
    color: #e63946;
    font-size: 0.9rem;
    text-align: center;
`;

export const SuccessMessage = styled.span`
    color: #2a9d8f;
    font-size: 0.9rem;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
`;
