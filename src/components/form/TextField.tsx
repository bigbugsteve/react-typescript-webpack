import React from 'react';
import { propTypes } from 'redux-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({ label, input, meta, meta: { touched, invalid, error, visited }, ...custom }) => {
    console.log('file: TextField.tsx ~ line 3 ~ propTypes', propTypes);
    return <TextField label={label} placeholder={label} error={touched && invalid} helperText={touched && error} {...input} {...custom} />;
};

export default renderTextField;
