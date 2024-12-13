import ApiClient from './apiClient';

const api = new ApiClient('http://localhost:3000');
api.axiosInstance.defaults.withCredentials = true;

export default api;
