import { ACTIONS } from './actions';

export const reducer = (state, { type, role }) => {
  switch (type) {
    case ACTIONS.ADD_ROLE:
      return {
        ...state,
        authorization: {
          ...state.authorization,
          roles: [...new Set([...state.authorization.roles, role])],
        },
      };
    case ACTIONS.REMOVE_ROLE:
      return {
        ...state,
        authorization: {
          roles: [...state.authorization.roles.filter(oldRole => oldRole !== role)],
        },
      };

    default:
      return state;
  }
};
