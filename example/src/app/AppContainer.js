import { connect } from 'react-redux';
import { App } from './App';

const mapStateToProps = state => ({
  roles: state.authorization.roles,
});

export const AppContainer = connect(mapStateToProps)(App);
