import React, { Fragment } from 'react';
import { AuthorizedSection } from '@tshio/react-router-permissions';

import { ROLES } from '../../store/actions';

export const Roles = ({ addRole, removeRole, roles }) => {
  const onAddRole = () => addRole(ROLES.ADMIN);
  const onRemoveRole = () => removeRole(ROLES.ADMIN);

  return (
    <div className="roles">
      <div className="roles__roles">
        <h3>Current roles:</h3>
        {roles.join(', ')}
      </div>
      <AuthorizedSection requires={ROLES.ADMIN}>
        {({ isAuthorized }) => (
          <div className="roles__buttons">
            <button type="button" className="btn btn-primary" onClick={isAuthorized ? onRemoveRole : onAddRole}>
              {isAuthorized ? 'Remove ' : 'Add '}
              {ROLES.ADMIN} role
            </button>
          </div>
        )}
      </AuthorizedSection>
    </div>
  );
};
