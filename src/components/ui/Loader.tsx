import React from 'react';
import ReactDOM from 'react-dom';
// import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

const LoadingScreen = () => {
    /* STATES */

    /* VARIABLES */
    const { t } = useTranslation('common');

    /* FUNCTIONS */
    const content = (
        <div className="isLoading">
            <div className="load__icon-wrapper">
                <img className="load__icon load__icon-wb" src="/images/spinner.svg" alt="Loader" />
            </div>
            <div className="load__icon-wb mt-5 load__warning">{t('error_handling.please_wait')}</div>
        </div>
    );

    /* USEEFFECTS */

    return ReactDOM.createPortal(content, document.getElementById('loader-hook')!);
};

export default LoadingScreen;

// export default reduxForm({
//     form: '{{form}}',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
//     touchOnBlur: false
// })(index)
