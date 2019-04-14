/**
 * Navigation.container.jsx
 * Container for navigation component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import {Navigation as NavigationComponent} from './Navigation.component';

// Actions
import {getFBLoginStatus} from '../actions/facebook';

const mapDispatchToProps = (dispatch) => ({
  getFBLoginStatus: () => dispatch(getFBLoginStatus()),
});

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationComponent);
