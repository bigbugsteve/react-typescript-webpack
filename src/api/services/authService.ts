import axiosInstance from '../http/axiosSetup';
import cookie from 'react-cookies';
export default class AuthService {
    static performLogin = (body) =>
        axiosInstance
            .post('/login', body)
            .then((res) => {
                cookie.save('token', res?.headers?.authorization, { path: '/' /*secure:true*/ });
            })
            .catch((err) => err.response);
}
