// import { reduxForm } from 'redux-form';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './footer';
import ResponsiveAppBar from './navigation/index';
const Layout = ({ children }) => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */

    /* USEEFFECTS */

    return (
        <div className="layout">
            <ResponsiveAppBar />
            {children}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;

// export default reduxForm({
//     form: '{{form}}',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
//     touchOnBlur: false
// })(index)
