/**
 * App.container.jsx
 * Container for app component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import {App as AppComponent} from './App.component';

// Actions
import {getFBLoginStatus} from '../actions/facebook';

const mapDispatchToProps = (dispatch) => ({
  getFBLoginStatus: () => dispatch(getFBLoginStatus()),
});

const mapStateToProps = (state) => ({
  fbLoginStatus: state.authentication.fbLoginStatus,
});

export const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent);
