import React, { useEffect } from 'react';
import i18next from 'i18next';
import { config as i18NextConfig } from '../translations/index';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import MainWrapper from '@src/components/layout/mainWrapper';
import Router from './router';
// Init i18next
i18next.init(i18NextConfig);

export const App = () => {
    const usestore = store.getState();
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                {/* <AuthProvider> */}
                <MainWrapper>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </MainWrapper>
                {/* </AuthProvider> */}
            </I18nextProvider>
        </Provider>
    );
};
