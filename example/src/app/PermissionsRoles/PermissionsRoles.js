import React from 'react';
import { usePermissions } from '@tshio/react-router-permissions';

export const PermissionsRoles = () => {
  const { permissions } = usePermissions();
  return <span>Roles length: {permissions.length} </span>;
};
