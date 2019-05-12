import { useState } from 'react';
import { usePermissions } from './usePermissions';

export const useAuthorize = (requires, authorizationStrategy) => {
  const { permissions } = usePermissions();
  const [isAuthorized, setAuthorization] = useState(authorizationStrategy(permissions, requires));

  return {
    isAuthorized,
    setAuthorization,
  };
};
