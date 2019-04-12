import { createStore } from 'redux';
import { reducer } from './reducer';
import { ROLES } from './actions';

export const store = createStore(reducer, {
  authorization: {
    roles: [ROLES.USER],
  },
});
