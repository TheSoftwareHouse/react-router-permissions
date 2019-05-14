// @flow

import * as React from 'react';
import { useAuthorize } from '../hooks/useAuthorize';

export type AuthorizedSectionProps = {
  requires: *,
  authorizationStrategy?: (permissions: *, requirement: *) => *,
  children: ({
    isAuthorized: *,
  }) => React.Node,
};

export const AuthorizedSection = ({ requires, authorizationStrategy, children }: AuthorizedSectionProps) => {
  const isAuthorized = useAuthorize(requires, authorizationStrategy);

  return children({ isAuthorized });
};
