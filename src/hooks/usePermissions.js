import { useContext } from 'react';
import { PermissionsContext } from '../permissions-context/permissions.context';

export const usePermissions = () => useContext(PermissionsContext);
