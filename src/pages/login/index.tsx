// import { reduxForm } from 'redux-form';
import AuthService from '@src/api/services/authService';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */
    const login = () => {
        performLogin();
    };
    /* API FUNCTIONS */
    const performLogin = () => {
        console.log('performlogin');
        const payload = {
            auth: {
                username: 'gnagy',
                password: 'Warranty.12',
            },
        };
        AuthService.performLogin(payload)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response));
        // .catch((err) => console.log(err));
    };
    /* USEEFFECTS */

    return (
        <>
            <button onClick={login}>Login</button>
        </>
    );
};

export default Login;

// export default reduxForm({
//     form: '{{form}}',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
//     touchOnBlur: false
// })(index)
