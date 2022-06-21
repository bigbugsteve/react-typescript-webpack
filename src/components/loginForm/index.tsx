import { Button, Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React from 'react';

// import Box from '@mui/material/Box';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import renderTextField from '../form/TextField';
import { required } from 'redux-form-validators';

interface LoginFormProps {
    performLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps & InjectedFormProps<FormData, LoginFormProps>> = ({ performLogin }) => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */

    /* USEEFFECTS */

    return (
        <form className={'login-form'}>
            <Field
                name="username"
                component={renderTextField}
                type="text"
                validate={[required({ msg: t('validations.required') })]}
                label={t('login.username')}
                // disabled={isFirstStepCompleted}
            />
            <Field
                name="password"
                component={renderTextField}
                type="password"
                validate={[required({ msg: t('validations.required') })]}
                label={t('login.username')}
                // disabled={isFirstStepCompleted}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //   className={classes.submit}
            >
                {t('login.login')}
            </Button>
        </form>
    );
};

// export default LoginForm;

export default reduxForm({
    form: 'loginform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    touchOnBlur: true,
})(LoginForm);
