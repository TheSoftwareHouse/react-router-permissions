// @flow

import * as React from 'react';
import { PermissionsContext } from '../permissions-context/permissions.context';
import { useAuthorize } from '../hooks/useAuthorize';
import { usePermissions } from '../hooks/usePermissions';

export type AuthorizedSectionProps = {
  requires: *,
  authorizationStrategy?: (permissions: *, requirement: *) => *,
  children: ({
    isAuthorized: *,
  }) => React.Node,
};

export const AuthorizedSection = ({
  requires,
  authorizationStrategy: overrideStrategy,
  children,
}: AuthorizedSectionProps) => {
  const { authorizationStrategy } = usePermissions();
  const { isAuthorized, setAuthorization } = useAuthorize(
    requires,
    overrideStrategy ? overrideStrategy : authorizationStrategy,
  );

  return (
    <PermissionsContext.Consumer>
      {({ authorizationStrategy, permissions }) => {
        overrideStrategy
          ? setAuthorization(overrideStrategy(permissions, requires))
          : setAuthorization(authorizationStrategy(permissions, requires));

        return children({
          isAuthorized,
        });
      }}
    </PermissionsContext.Consumer>
  );
};
