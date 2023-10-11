import axios from 'axios';

/**
 * Global setup axios: baseURL, request interceptors, response interceptors
 */
export const setupAxios = () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;

  return axios;
};
