/**
 * Navigation.container.js
 * Container for navigation container
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import NavigationComponent from './Navigation.component';

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const Navigation = connect(mapStateToProps)(NavigationComponent);
