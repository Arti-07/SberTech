import React from 'react';
import { describe, test, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import MockAdapter from 'axios-mock-adapter';

import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SignInPage from '../index';


const theme = createTheme({
    palette: {
        mode: 'dark',
            background: {
                default: '#1E1E2A',
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    html: {
                        height: '100%',
                    },
                    '#app': {
                        height: '100%',
                    },
                    body: {
                        height: '100%',
                        backgroundImage: 'linear-gradient(to right top, #292934, #424251, #5c5c6f, #77778f, #9494b1);',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    },
                },
            },
        },
});


describe('SignInPage component', () => {
    let mockAxios;
    
    beforeEach(() => {
        mockAxios = new MockAdapter(axios);
    });
    
    afterEach(() => {
        mockAxios.reset();
        jest.clearAllMocks();
    });

    test('should display error message when no login or password provided', async () => {
        render(
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <SignInPage />
                </MemoryRouter>
            </ThemeProvider>
        );

        const signInButton = screen.getByRole('button', { name: 'Sign In' });
        fireEvent.click(signInButton);

        expect(await screen.findByText('Login must be at least 3 characters and can include letters, numbers, @, $, -, and _.')).toBeInTheDocument();
    });

    test('should display error message when only login provided', async () => {
        render(            
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <SignInPage />
                </MemoryRouter>
            </ThemeProvider>
        );

        const loginInput = screen.getByPlaceholderText('Enter username');
        fireEvent.change(loginInput, {target: {value: 'test_user'}});

        const signInButton = screen.getByRole('button', { name: 'Sign In' });
        fireEvent.click(signInButton);

        expect(await screen.findByText('Password must be at least 6 characters and include at least one letter and one number.')).toBeInTheDocument();
    });

    test('should display error message when only password provided', async () => {
        render(
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <SignInPage />
                </MemoryRouter>
            </ThemeProvider>
        );

        const passwordInput = screen.getByPlaceholderText('Enter password');
        fireEvent.change(passwordInput, {target: {value: 'valid_password'}});

        const signInButton = screen.getByRole('button', { name: 'Sign In' });
        fireEvent.click(signInButton);

        expect(await screen.findByText('Login must be at least 3 characters and can include letters, numbers, @, $, -, and _.')).toBeInTheDocument();
    });

    test.skip('calls API with correct credentials', async () => {
        mockAxios.onPost('/auth/login').replyOnce(401, {});

        render(
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <SignInPage />
                </MemoryRouter>
            </ThemeProvider>
        );

        const inputLogin = screen.getByPlaceholderText('Enter username');
        const inputPassword = screen.getByPlaceholderText('Enter password');
        const button = screen.getByRole('button', { name: 'Sign In' });

        fireEvent.change(inputLogin, {target: {value: 'valid_username'}});
        fireEvent.change(inputPassword, {target: {value: 'valid_password'}});

        fireEvent.click(button);

        expect(await screen.findByText('Проверьте подключение к интернету и попробуйте снова.')).toBeInTheDocument();
    });

});
