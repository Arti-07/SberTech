// import styled from '@emotion/styled';
// import { Theme } from '@mui/material/styles';
//
// export const Container = styled.div<{ theme?: Theme }>`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     background-color: ${(props) => props.theme?.palette.background.default || '#f5f5f5'};
//     color: ${(props) => props.theme?.palette.text.primary || '#000'};
//     transition: background-color 0.3s ease, color 0.3s ease;
// `;
//
// export const Input = styled.input<{ theme?: Theme }>`
//     margin: 10px 0;
//     padding: 10px;
//     width: 300px;
//     border: 1px solid ${(props) => props.theme?.palette.divider || '#ccc'};
//     border-radius: 5px;
//     font-size: 16px;
//     background-color: ${(props) => props.theme?.palette.background.paper || '#fff'};
//     color: ${(props) => props.theme?.palette.text.primary || '#000'};
//     transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
//
//     &:focus {
//         border-color: ${(props) => props.theme?.palette.primary.main || '#007bff'};
//         outline: none;
//     }
// `;
//
// export const Button = styled.button<{ theme?: Theme }>`
//     margin: 10px 0;
//     padding: 10px 20px;
//     background-color: ${(props) => props.theme?.palette.primary.main || '#007bff'};
//     color: ${(props) => props.theme?.palette.primary.contrastText || 'white'};
//     border: none;
//     border-radius: 5px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s ease, color 0.3s ease;
//
//     &:hover {
//         background-color: ${(props) => props.theme?.palette.primary.dark || '#0056b3'};
//     }
// `;
//
// export const Message = styled.div<{ theme?: Theme }>`
//     margin: 20px 0;
//     color: ${(props) => props.theme?.palette.error.main || 'red'};
//     font-size: 14px;
//     transition: color 0.3s ease;
// `;


import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

// export const Container = styled.div<{ theme?: Theme }>`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     max-width: 400px;
//     margin: 0 auto;
//     padding: 20px;
//     height: 20%;
//     min-height: 50vh;
//     background-color: ${(props) => props.theme?.palette.background.default || '#f5f5f5'};
//     color: ${(props) => props.theme?.palette.text.primary || '#000'};
//     transition: background-color 0.3s ease, color 0.3s ease;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     border-radius: 8px;
// `;
//
// export const Input = styled.input<{ theme?: Theme }>`
//     margin: 10px 0;
//     padding: 10px;
//     width: 100%;
//     border: 1px solid ${(props) => props.theme?.palette.divider || '#ccc'};
//     border-radius: 5px;
//     font-size: 16px;
//     background-color: ${(props) => props.theme?.palette.background.paper || '#fff'};
//     color: ${(props) => props.theme?.palette.text.primary || '#000'};
//     transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
//
//     &:focus {
//         border-color: ${(props) => props.theme?.palette.primary.main || '#007bff'};
//         outline: none;
//     }
// `;
//
// export const Button = styled.button<{ theme?: Theme }>`
//     margin: 10px 0;
//     padding: 10px 20px;
//     width: 100%;
//     background-color: ${(props) => props.theme?.palette.primary.main || '#007bff'};
//     color: ${(props) => props.theme?.palette.primary.contrastText || 'white'};
//     border: none;
//     border-radius: 5px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s ease, color 0.3s ease;
//
//     &:hover {
//         background-color: ${(props) => props.theme?.palette.primary.dark || '#0056b3'};
//     }
// `;
//
// export const Message = styled.div<{ theme?: Theme }>`
//     margin: 10px 0;
//     color: ${(props) => props.theme?.palette.error.main || 'red'};
//     font-size: 14px;
//     font-weight: bold;
//     text-align: center;
//     transition: color 0.3s ease;
// `;


export const Container = styled.div<{ theme?: Theme }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    width: 100%;
    max-width: 400px; 
    margin: 0 auto; 
    padding: 20px;
    min-height: 50vh; 
    background-color: ${(props) => props.theme?.palette.background.default || '#ADD8E6'};
    color: ${(props) => props.theme?.palette.text.primary || '#000'};
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
`;

export const Input = styled.input<{ theme?: Theme }>`
    margin: 10px 0;
    padding: 10px;
    width: 100%;  
    max-width: 100%; 
    min-width: 200px; 
    border: 1px solid ${(props) => props.theme?.palette.divider || '#ccc'};
    border-radius: 5px;
    font-size: 16px;
    background-color: ${(props) => props.theme?.palette.background.paper || '#fff'};
    color: ${(props) => props.theme?.palette.text.primary || '#000'};
    transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    box-sizing: border-box;
    flex-shrink: 0; 

    &:focus {
        border-color: ${(props) => props.theme?.palette.primary.main || '#007bff'};
        outline: none;
    }
`;

export const Button = styled.button<{ theme?: Theme }>`
    margin: 10px 0;
    padding: 10px 20px;
    width: 100%;
    background-color: ${(props) => props.theme?.palette.primary.main || '#ADD8E6'};
    color: ${(props) => props.theme?.palette.primary.contrastText || 'white'};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme?.palette.primary.dark || '#1E1E2A'};
    }
    flex-shrink: 0;  
`;

export const Message = styled.div<{ theme?: Theme }>`
    margin: 10px 0;
    color: ${(props) => props.theme?.palette.error.main || 'red'};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    transition: color 0.3s ease;
`;
