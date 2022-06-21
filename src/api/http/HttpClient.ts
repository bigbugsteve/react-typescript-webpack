import initialization from './axiosSetup';
import { axiosRequestConfiguration } from './config';

const axiosInstance = initialization(axiosRequestConfiguration);

export default class HttpClient {
    static get = (url: string, queryParams?: Record<string, string>) => {
        return axiosInstance.get(url, { params: queryParams }).then((res) => {
            return res;
        });
    };
    static post = (url: string, queryParams?: Record<string, string>) => {
        return () =>
            axiosInstance
                .post(url, { params: queryParams })
                .then((res) => res)
                .catch((err) => err);
    };
}
