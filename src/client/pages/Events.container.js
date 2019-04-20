/**
 * Events.container.js
 * Container for events page component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import EventsPageComponent from './Events.component';

// Actions
// import {loadSessionObject} from '../actions/authentication';
// import {initializeFBAPI} from '../actions/facebook';

// const mapDispatchToProps = (dispatch) => ({
//   initializeFBAPI: () => dispatch(initializeFBAPI()),
//   loadSessionObject: () => dispatch(loadSessionObject()),
// });

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const EventsPage = connect(
    mapStateToProps,
    // mapDispatchToProps,
)(EventsPageComponent);
