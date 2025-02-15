import axios, {AxiosInstance} from 'axios';

class ApiClient {
    axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            withCredentials: true
        });
    }

    async loginWithCode(username: string, verificationCode: string) {
        return this.axiosInstance.post('/auth/login-with-telegram-code', {
            username,
            verificationCode
        }).then(res => res.data);
    }

    async sendCode(username: string) {
        return this.axiosInstance.post('/auth/sendcode', {username}).then(res => res.data);
    }

    async isAuthenticated(): Promise<boolean> {
        try {
            await this.axiosInstance.get('/auth/check-auth');
            return true;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                return false;
            }
            throw error;
        }
    }

    async getListings() {
        return this.axiosInstance.get('/api/listings').then(res => res.data);
    }

    async getTicker(id: number, convert: string = 'USD') {
        return this.axiosInstance.get(`/api/ticker/${id}`, {params: {convert}}).then(res => res.data);
    }

    async getChart(id: string, convert: string = 'USD') {
        return this.axiosInstance.get(`/api/chart/${id}`, {params: {convert}}).then(res => res.data);
    }

    async getInfo(id: string) {
        return this.axiosInstance.get(`/api/info/${id}`).then(res => res.data);
    }

    async getBalance() {
        return this.axiosInstance.get('/account/balance').then(res => res.data);
    }

    async updateBalance(amount: number) {
        return this.axiosInstance.patch('/account/balance', {amount}).then(res => res.data);
    }

    async register(username: string, password: string, birthDate: string, chatIDuser?: string) {
        const payload: Record<string, any> = {username, password, birthDate};
        if (chatIDuser) {
            payload.chatIDuser = chatIDuser;
        }
        return this.axiosInstance.post('/auth/register', payload).then((res) => res.data);
    }

    async login(username: string, password: string) {
        const response = await this.axiosInstance.post('/auth/login', {username, password});
        return response.data;
    }

    async getWallet() {
        return this.axiosInstance.get('/account/wallet-address').then(res => res.data);
    }

    async transfer(receiverWallet: string, amount: number) {
        return this.axiosInstance.post('/account/transfer', {receiverWallet, amount}).then(res => res.data);
    }

    async applyPromo(code: string) {
        return this.axiosInstance.post('/promocode/apply', {code}).then(res => res.data);
    }
}

export default ApiClient;
