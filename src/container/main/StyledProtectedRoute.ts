import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

export const Container = styled.div<{ theme: Theme }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    font-family: 'Arial', sans-serif;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1024px) {
        width: 250px; /* уменьшаем ширину для планшетов */
        padding: 18px;
    }

    @media (max-width: 768px) {
        width: 220px; /* уменьшаем ширину для мобильных устройств */
        padding: 16px;
    }

    @media (max-width: 480px) {
        width: 180px; /* ещё меньше для самых маленьких экранов */
        padding: 12px;
    }
`;

export const Message = styled.p<{ theme: Theme }>`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 20px;

    @media (max-width: 1024px) {
        font-size: 16px; /* уменьшаем шрифт для планшетов */
        margin-bottom: 15px; /* уменьшаем отступ */
    }

    @media (max-width: 768px) {
        font-size: 14px; /* уменьшаем шрифт для мобильных */
        margin-bottom: 12px; /* уменьшаем отступ */
    }

    @media (max-width: 480px) {
        font-size: 12px; /* ещё меньше для маленьких экранов */
        margin-bottom: 10px;
    }
`;

export const Button = styled.button<{ theme: Theme }>`
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#2F4F4F' : '#2196F3')};
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#45a049' : '#1976D2')};
    }

    & + & {
        margin-top: 15px;
    }

    @media (max-width: 1024px) {
        padding: 10px 20px; /* уменьшаем отступы для планшетов */
        font-size: 14px; /* уменьшаем шрифт */
    }

    @media (max-width: 768px) {
        padding: 8px 16px; /* ещё меньше отступы для мобильных */
        font-size: 12px; /* ещё меньше шрифт */
    }

    @media (max-width: 480px) {
        padding: 6px 12px; /* минимальные отступы для маленьких экранов */
        font-size: 10px;
    }
`;
