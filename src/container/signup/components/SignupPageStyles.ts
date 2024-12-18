import styled from '@emotion/styled';

export const GifContainer = styled.div`
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const SuccessMessage = styled.div`
    animation: slideUp 0.5s ease-in-out;
    color: #28a745;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
    width: 100%;

    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const ErrorMessage = styled.div`
    animation: shake 0.5s ease-in-out;
    color: #dc3545;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
    width: 100%;

    @keyframes shake {
        0% {
            transform: translateX(-5px);
        }
        25% {
            transform: translateX(5px);
        }
        50% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;

export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`;

export const SignupTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.1);
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;

    &:hover {
        text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

export const FormInput = styled.input`
    padding: 12px;
    margin-top: 5px;
    font-size: 1rem;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const Tooltip = styled.span`
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-20%);
    cursor: pointer;
    font-size: 1.5rem;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
`;

export const Button = styled.button`
    padding: 12px 25px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.button-primary {
        background-color: #007bff;
        color: white;

        &:hover {
            background-color: #0056b3;
        }
    }

    &.button-secondary {
        background-color: #6c757d;
        color: white;

        &:hover {
            background-color: #5a6268;
        }
    }
`;
