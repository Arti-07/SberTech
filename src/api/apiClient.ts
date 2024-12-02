import axios, {AxiosInstance} from "axios";

class ApiClient {
    private axiosInstance: AxiosInstance;


    constructor(baseURL: string, private token?: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: this.token ? {secretoken: this.token} : undefined,
        });
    }

    setToken(token: string) {
        this.token = token;
        this.axiosInstance.defaults.headers['secrettoken'] = token;
    }

    clearToken() {
        this.token = undefined;
        delete this.axiosInstance.defaults.headers['secretoken'];
    }

    async getListings() {
        return this.axiosInstance.get('/api/listings').then(res => res.data);
    }

    async getTicker(id: string, convert: string = 'USD') {
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

    async register(username: string, password: string, birthDate: string) {
        return this.axiosInstance.post('/auth/register', {username, password, birthDate}).then(res => res.data);
    }

    async login(username: string, password: string) {
        const response = await this.axiosInstance.post('/auth/login', {username, password});
        const {token} = response.data;
        this.setToken(token);
        return token;
    }

    async verifyToken() {
        return this.axiosInstance.get('/verify-token').then(res => res.data);
    }
}

export default ApiClient;