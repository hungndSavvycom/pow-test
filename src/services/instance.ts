import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __DEV__ = process.env.NODE_ENV === 'development';

const HttpInstance = Axios.create({
  timeout: 20000,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

HttpInstance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    return config;
  },
  (error: any) => {
    if (__DEV__) {
      console.error('API Request Error:', error);
    }
    return Promise.reject(error);
  },
);

HttpInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError<any>) => {
    if (__DEV__) {
      console.error('API Response Error:', error);
    }
    const { response } = error;

    const errorMessage = response?.data?.error || 'Error';
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  },
);

export default HttpInstance;
