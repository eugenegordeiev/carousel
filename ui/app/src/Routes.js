import React, { useContext, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from 'pages/main';
import { Loader } from 'shared/components';

export default () => {
    return (
        <Switch>
            <Route
                exact
                path="/carousel/:imageType"
                component={Main}
            />

            <Route path="*">
                <Redirect to="/carousel/sharks" />
            </Route>
        </Switch>
    );
};