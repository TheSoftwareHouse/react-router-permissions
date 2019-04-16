export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};

export const ACTIONS = {
  ADD_ROLE: 'ADD_ROLE',
  REMOVE_ROLE: 'REMOVE_ROLE',
};

export const addRole = role => ({ type: ACTIONS.ADD_ROLE, role });
export const removeRole = role => ({ type: ACTIONS.REMOVE_ROLE, role });
