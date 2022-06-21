import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { axiosRequestConfiguration } from './config';
import cookie from 'react-cookies';

const tokenFunction = () => {
    const token = cookie.load('token');
    return `Bearer ${token}`;
};

const initialization = (configs: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(configs);
    // axiosInstance.interceptors.request.use((request) => {
    //     request.headers.Authorization = 'Bearer token';
    // });
    return axiosInstance;
};

const axiosInstance = initialization(axiosRequestConfiguration);

export default axiosInstance;
