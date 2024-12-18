import styled from '@emotion/styled';

export const Container = styled.div`
    text-align: center;
    margin-top: 50px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
`;

export const InputGroup = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    text-align: left;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 1rem;
    box-sizing: border-box;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const PasswordToggle = styled.span`
    position: absolute;
    top: 70%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.2rem;
    color: #007bff;

    &:hover {
        color: #0056b3;
    }
`;

export const Message = styled.div<{ isSuccess: boolean }>`
    color: ${(props) => (props.isSuccess ? 'green' : 'red')};
    margin-bottom: 20px;
`;

export const SignInButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #0056b3;
    }
`;
