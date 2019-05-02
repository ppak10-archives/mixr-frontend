/**
 * Home.container.js
 * Container for home page component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import HomePageComponent from './Home.component';

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const HomePage = connect(mapStateToProps)(HomePageComponent);
