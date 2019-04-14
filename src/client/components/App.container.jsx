/**
 * App.container.jsx
 * Container for app component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import {App as AppComponent} from './App.component';

// Actions
import {loadSessionObject} from '../actions/authentication';

const mapDispatchToProps = (dispatch) => ({
  loadSessionObject: () => dispatch(loadSessionObject()),
});

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent);
