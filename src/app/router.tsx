import React from 'react';
import Layout from '@src/components/layout/layout';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Contact = lazy(() => import('@src/pages/contact/index'));
const Login = lazy(() => import('@src/pages/login/index'));
const Home = lazy(() => import('@src/pages/index'));
const Router = () => {
    return (
        <>
            <Suspense>
                <Switch>
                    <Route exact path="/">
                        <Layout>
                            <Suspense fallback={<div>...Loading</div>}>
                                <>
                                    <Home />
                                </>
                            </Suspense>
                        </Layout>
                    </Route>
                    <Route exact path="/login">
                        <Layout>
                            <Suspense fallback={<div>...Loading</div>}>
                                <Login />
                            </Suspense>
                        </Layout>
                    </Route>
                    <Route exact path="/contact">
                        <Layout>
                            <Suspense fallback={<div>...Loading</div>}>
                                <Contact />
                            </Suspense>
                        </Layout>
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default Router;
