import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import ApiClient from '../apiClient';

const baseUrl = 'http://example.com/api';

describe('ApiClient tests', () => {
    let apiClient;
    let mockAxios;

    beforeEach(() => {
        apiClient = new ApiClient(baseUrl);
        mockAxios = new MockAdapter(apiClient.axiosInstance);
    });

    afterEach(() => {
        mockAxios.restore();
    });

    describe('login method', () => {
        test('should successfully log in a user', async () => {
            const username = 'test_user';
            const password = 'test_password';

            // Настраиваем мокированный ответ для метода POST /auth/login
            mockAxios.onPost('/auth/login', { username, password }).reply(200, {
                success: true,
                data: { token: 'fake_token' },
            });

            const result = await apiClient.login(username, password);

            expect(result.success).toBe(true);
            expect(result.data.token).toBe('fake_token');
        });

        test('should fail to log in with invalid credentials', async () => {
            const username = 'invalid_user';
            const password = 'invalid_password';

            // Настраиваем мокированный ответ для метода POST /auth/login
            mockAxios.onPost('/auth/login', { username, password }).reply(401, {
                success: false,
                message: 'Invalid credentials.',
            });

            try {
                await apiClient.login(username, password);
            } catch (error) {
                expect(error.response.status).toBe(401);
                expect(error.response.data.message).toBe('Invalid credentials.');
            }
        });
    });
});