import { jest } from '@jest/globals';
import axios, { AxiosInstance } from 'axios';

var mockAxios = axios;

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

        async getTicker(id: number, convert: string = 'USD') {
            return {};
        }

        async getChart(id: string, convert: string = 'USD') {
            return {};
        }

        async getInfo(id: string) {
            return {};
        }

        async getBalance() {
            return {};
        }

        async updateBalance(amount: number) {
            return {};
        }

        async register(username: string, password: string, birthDate: string) {
            return {};
        }

        async login(username: string, password: string) {
            return {};
        }

        async verifyToken() {
            return {};
        }

        async getWallet() {
            return '';
        }

        async transfer(receiverWallet: string, amount: number) {
            return {};
        }
    }

    return {
    __esModule: true,
    default: MockApiClient,
    };
});