import ApiClient from './apiClient';
import { getConfig } from '@brojs/cli';

const config = getConfig();
const entries_config = Object.entries(config);
const api_config = entries_config.filter(([key]) => key.includes('smartini_crypto.api'));
const apiUrl = api_config.map(([, value]) => value)[0];

const api = new ApiClient(apiUrl as string);
api.axiosInstance.defaults.withCredentials = true;

export default api;
