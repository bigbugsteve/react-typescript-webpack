// import { reduxForm } from 'redux-form';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainWrapper = ({ children }) => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */

    /* API FUNCTIONS */

    /* USEEFFECTS */

    return <main className="main-wrapper">{children}</main>;
};

export default MainWrapper;

// export default reduxForm({
//     form: '{{form}}',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
//     touchOnBlur: false
// })(index)
