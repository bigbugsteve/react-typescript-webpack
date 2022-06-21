import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.API_URL;

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: baseURL,
    headers: {
        SCH_ID: 'ORANGE',
    },
};
