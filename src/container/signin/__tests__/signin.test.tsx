import React from 'react';
import { describe, test, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import SignInPage from '../index';

jest.mock('axios');

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
            <MemoryRouter>
                <SignInPage />
            </MemoryRouter>
        );

        const signInButton = screen.getByRole('button', { name: 'Sign In' });
        fireEvent.click(signInButton);

        expect(await screen.findByText('Введите логин и пароль')).toBeInTheDocument();
    });

    test('should display error message when only login provided', async () => {
        render(
            <MemoryRouter>
                <SignInPage />
            </MemoryRouter>
        );

        const loginInput = screen.getByPlaceholderText('Enter username');
        fireEvent.change(loginInput, {target: {value: 'test_user'}});

        const signInButton = screen.getByRole('button', { name: 'Sign In' });
        fireEvent.click(signInButton);

        expect(await screen.findByText('Введите пароль')).toBeInTheDocument();
    });

    test('should display error message when only password provided', async () => {
        render(
            <MemoryRouter>
                <SignInPage />
            </MemoryRouter>
        );

        const passwordInput = screen.getByPlaceholderText('Enter password');
        fireEvent.change(passwordInput, {target: {value: 'valid_password'}});

        const signInButton = screen.getByRole('button', { name: 'Sign In' });
        fireEvent.click(signInButton);

        expect(await screen.findByText('Введите логин')).toBeInTheDocument();
    });

    // test('calls API with correct credentials', async () => {
    //     const mockApiResponse = Promise.resolve({ data: {} });
    //     (axios.post as jest.Mock).mockImplementationOnce(() => mockApiResponse);

    //     render(
    //         <MemoryRouter>
    //             <SignInPage />
    //         </MemoryRouter>
    //     );


    //     const inputLogin = screen.getByPlaceholderText('Enter username');
    //     const inputPassword = screen.getByPlaceholderText('Enter password');
    //     const button = screen.getByRole('button', { name: 'Sign In' });

    //     fireEvent.change(inputLogin, {target: {value: 'valid_username'}});
    //     fireEvent.change(inputPassword, {target: {value: 'valid_password'}});

    //     fireEvent.click(button);

    //     expect(axios.post).toHaveBeenCalledWith(
    //         '/login',
    //         { login: 'test_user', password: 'test_password' },
    //     );
    // });

    // test('should successfully log in with valid credentials', async () => {

    //     render(<SignInPage />);

    //     const loginInput = screen.getByPlaceholderText('Enter username');
    //     const passwordInput = screen.getByPlaceholderText('Enter password');
    //     const signInButton = screen.getByRole('button', { name: 'Sign In' });

    //     fireEvent.change(loginInput, {target: {value: 'valid_username'}});
    //     fireEvent.change(passwordInput, {target: {value: 'valid_password'}});

            mockAxios.onPost('/auth/login').replyOnce(200, {});

    //     fireEvent.click(signInButton);

    //     expect(sessionStorage.getItem('login')).toEqual('valid_username');
    // });

    // test('should display error message for invalid credentials', async () => {
    //     render(<SignInPage />);

    //     const loginInput = screen.getByPlaceholderText('Enter username');
    //     const passwordInput = screen.getByPlaceholderText('Enter password');
    //     const signInButton = screen.getByRole('button', { name: 'Sign In' });

    //     userEvent.type(loginInput, 'invalid_username');
    //     userEvent.type(passwordInput, 'invalid_password');

    //     mockAxios.onPost('/auth/login').replyOnce(401, {});

    //     fireEvent.click(signInButton);

    //     expect(await screen.findByText('Неверный логин или пароль')).toBeInTheDocument();
    // });

    // test('should display generic error message for other errors', async () => {
    //     render(<SignInPage />);

    //     const loginInput = screen.getByPlaceholderText('Enter username');
    //     const passwordInput = screen.getByPlaceholderText('Enter password');
    //     const signInButton = screen.getByRole('button', { name: 'Sign In' });

    //     userEvent.type(loginInput, 'username');
    //     userEvent.type(passwordInput, 'password');

    //     mockAxios.onPost('/auth/login').networkError();

    //     fireEvent.click(signInButton);

    //     expect(await screen.findByText('Произошла ошибка. Попробуйте позже.')).toBeInTheDocument();
    // });
});
