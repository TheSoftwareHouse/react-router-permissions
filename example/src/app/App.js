import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PermissionsProvider, AuthorizedRoute } from '@tshio/react-router-permissions';

import { Home } from './Home/Home';
import { CantTouchThis } from './CantTouchThis/CantTouchThis';
import { IAmAllYours } from './IAmAllYours/IAmAllYours';
import { ROLES as ROLES_ENUM } from '../store/actions';
import { RolesContainer } from './Roles/RolesContainer';

const authorizationStrategy = (currentRoles, requirement) => {
  return currentRoles.find(role => role === requirement);
};
// it's possible to override strategy for single route
const loginAuthorizationStrategy = (currentRoles, requirement) => {
  return currentRoles && currentRoles.length;
};

export const App = ({ roles }) => {
  return (
    <div className="app">
      <div>
        An barebones app to show basic usage of the{' '}
        <a href="https://github.com/TheSoftwareHouse/react-router-permissions">@tshio/react-router-permissions</a>{' '}
        library. <pre>Roles.js</pre> makes use of the <pre>AuthorizedSection</pre> component, and <pre>App.js</pre>{' '}
        presents both the <pre>AuthorizedRoute</pre> and the <pre>PermissionsProvider</pre> components.
      </div>

      <PermissionsProvider permissions={roles} authorizationStrategy={authorizationStrategy}>
        <RolesContainer />
        <BrowserRouter>
          <Switch>
            <AuthorizedRoute path="/forusers" authorizationStrategy={loginAuthorizationStrategy}>
              {({ isAuthorized }) => (isAuthorized ? <IAmAllYours /> : <CantTouchThis />)}
            </AuthorizedRoute>
            <AuthorizedRoute path="/foradmins" requires={ROLES_ENUM.ADMIN}>
              {({ isAuthorized }) => (isAuthorized ? <IAmAllYours /> : <CantTouchThis />)}
            </AuthorizedRoute>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </PermissionsProvider>
    </div>
  );
};
