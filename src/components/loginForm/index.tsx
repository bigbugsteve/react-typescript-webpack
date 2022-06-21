import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import renderTextField from '../form/TextField';
import { required } from 'redux-form-validators';
const LoginForm = () => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */

    /* USEEFFECTS */

    return (
        <form className={''}>
            <Field
                name="username"
                component={renderTextField}
                type="text"
                validate={[required({ msg: t('validations.required') })]}
                label={t('login.username')}
                // disabled={isFirstStepCompleted}
            />
            <TextField
                name="insta"
                variant="outlined"
                fullWidth
                id="insta"
                label="Instagram profile"
                //   InputLabelProps={{ shrink: insta }}
                //   onFocus={handleFocus}
            />
            <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
            <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //   className={classes.submit}
            >
                Sign Up
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
