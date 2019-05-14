import { usePermissions } from './usePermissions';

export const useAuthorize = (requires, authorizationStrategy) => {
  const { permissions, authorizationStrategy: defaultStrategy } = usePermissions();

  return authorizationStrategy ? authorizationStrategy(permissions, requires) : defaultStrategy(permissions, requires);
};
