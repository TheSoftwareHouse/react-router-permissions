import { connect } from 'react-redux';
import { Roles } from './Roles';
import { addRole, removeRole } from '../../store/actions';

const mapStateToProps = state => ({
  roles: state.authorization.roles,
});

const mapDispatchToProps = dispatch => ({
  addRole: role => dispatch(addRole(role)),
  removeRole: role => dispatch(removeRole(role)),
});

export const RolesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Roles);
