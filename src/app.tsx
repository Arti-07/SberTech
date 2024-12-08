import React from 'react';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './container/main';


const App = () => {
    return (
        <StrictMode>
            <CssBaseline />
            <Main />
        </StrictMode>
    );
};

export default App;
