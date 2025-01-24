import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const InputGroup = styled.div`
    margin: 20px auto;
    max-width: 400px;
    position: relative;
    text-align: center;

    @media (max-width: 600px) {
        max-width: 300px;
    }
`;

export const InputField = styled.input`
    width: 100%;
    padding: 12px 20px;
    border: 2px solid ${(props) => props.theme.palette.text.secondary};
    border-radius: 30px;
    font-size: 1rem;
    background-color: ${(props) => props.theme.palette.background.paper};
    color: ${(props) => props.theme.palette.text.primary};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: ${(props) => props.theme.palette.primary.main};
        outline: none;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

export const Message = styled.div<{ isSuccess: boolean }>`
    color: ${(props) =>
            props.isSuccess
                    ? props.theme.palette.success.main
                    : props.theme.palette.error.main};
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

export const EnterButton = styled.button`
    width: 100%;
    padding: 12px 25px;
    background: linear-gradient(
            90deg,
            ${(props) => props.theme.palette.primary.main},
            ${(props) => props.theme.palette.primary.dark}
    );
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background: linear-gradient(
                90deg,
                ${(props) => props.theme.palette.primary.dark},
                ${(props) => props.theme.palette.primary.light}
        );
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;
