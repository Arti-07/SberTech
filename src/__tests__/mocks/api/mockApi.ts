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
    }

    return {
        __esModule: true,
        default: new MockApiClient('http://example.com/api'),
    };
});