import React, { ComponentType, ReactNode } from 'react';

type AnyObject = {
  [key: string]: any;
};

type BooleanObject = {
  [key: string]: boolean;
};

type authorizationStrategy<P, R> = (permissions: P, requirement: R) => any;

type withIsAuthorized = ({ isAuthorized: any }) => ReactNode | null;

type AuthorizedSectionProps = {
  requires: any;
  authorizationStrategy?: authorizationStrategy<any, any>;
  children: withIsAuthorized;
};

type AuthorizedRouteProps = {
  path: string;
  authorizationStrategy?: authorizationStrategy<any, any>;
  requires?: any;
  children: withIsAuthorized;
};

type PermissionProviderProps = {
  permissions: AnyObject;
  authorizationStrategy: authorizationStrategy<any, any>;
  children: ReactNode;
};

type Permissions = {
  permissions: AnyObject;
  authorizationStrategy: authorizationStrategy<any, any>;
}

export const AuthorizedSection: ComponentType<AuthorizedSectionProps>;

export const AuthorizedRoute: ComponentType<AuthorizedRouteProps>;

export const PermissionsProvider: ComponentType<PermissionProviderProps>;

export const atLeastOneStrategy: authorizationStrategy<BooleanObject, Array<string> | string>;

export const permissionsStrategy: authorizationStrategy<BooleanObject, string>;

export const roleBasedStrategy: authorizationStrategy<Array<string>, string>;

export const useAuthorize: (requirement?: any, authorizationStrategy?: authorizationStrategy<any, any>) => boolean;

export const usePermissions: () => Permissions;
