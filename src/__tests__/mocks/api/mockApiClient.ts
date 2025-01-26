import { jest } from '@jest/globals';
import axios, { AxiosInstance } from 'axios';

const mockAxios = axios;

jest.mock('./apiClient', () => {
    class MockApiClient {
        axiosInstance: AxiosInstance;

        constructor(baseURL: string) {
            this.axiosInstance = mockAxios.create({
            baseURL,
            withCredentials: true
            });
        }

        setToken(token: string) {
            this.axiosInstance.defaults.headers['secretoken'] = token;
        }

        clearToken() {
            delete this.axiosInstance.defaults.headers['secretoken'];
        }

        async isAuthenticated(): Promise<boolean> {
            return true;
        }

        async getListings() {
            return [];
        }

    }

    return {
    __esModule: true,
    default: MockApiClient,
    };
});