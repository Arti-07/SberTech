import styled from '@emotion/styled';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    text-align: center;
`;

export const UserInfo = styled.div`
    background: #fff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 400px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const BalanceText = styled.p`
    font-size: 1.5rem;
    margin: 20px 0;
    color: #007bff;
    font-weight: 600;
`;

export const StyledButton = styled.button`
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const TopUpContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;

export const AmountInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 150px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;
