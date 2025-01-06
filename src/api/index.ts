import ApiClient from './apiClient';

const api = new ApiClient('https://193.124.118.57');
api.axiosInstance.defaults.withCredentials = true;

export default api;
