import { jest } from '@jest/globals';

jest.mock('api', () => {
    const mockedAxiosInstance = {
        defaults: {
            withCredentials: true,
            headers: {
                secretoken: '',
            },
        },
    };

    class MockApiClient {
        axiosInstance = mockedAxiosInstance;
        baseURL;

        constructor(baseURL) {
            this.baseURL = baseURL;
        }

        setToken(token) {
            this.axiosInstance.defaults.headers['secretoken'] = token;
        }

        clearToken() {
            delete this.axiosInstance.defaults.headers['secretoken'];
        }

        async isAuthenticated() {
            return true;
        }

        async getListings() {
            return [];
        }

        async getTicker(id, convert = 'USD') {
            return {};
        }

        async getChart(id, convert = 'USD') {
            return {};
        }

        async getInfo(id) {
            return {};
        }

        async getBalance() {
            return {};
        }

        async updateBalance(amount) {
            return {};
        }

        async register(username, password, birthDate) {
            return {};
        }

        async login(username, password) {
            return {};
        }

        async verifyToken() {
            return {};
        }

        async getWallet() {
            return '';
        }

        async transfer(receiverWallet, amount) {
            return {};
        }
    }

    return {
        __esModule: true,
        default: new MockApiClient('http://example.com/api'),
    };
});