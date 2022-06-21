import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import cookie from 'react-cookies';

const tokenFunction = () => {
    const token = cookie.load('token');
    return `Bearer ${token}`;
};

const initialization = (configs: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(configs);
    console.log('file: axiosSetup.ts ~ line 11 ~ initialization ~ axiosInstance', axiosInstance);

    axiosInstance.interceptors.request.use((request) => {
        request.headers.Authorization = 'Bearer token';
    });
    return axiosInstance;
};

export default initialization;
