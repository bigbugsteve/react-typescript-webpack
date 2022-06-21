// import { reduxForm } from 'redux-form';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */

    /* USEEFFECTS */

    return <div className="layout">{children}</div>;
};

export default Layout;

// export default reduxForm({
//     form: '{{form}}',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
//     touchOnBlur: false
// })(index)
