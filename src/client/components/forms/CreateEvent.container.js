/**
 * CreateEvent.container.js
 * Container for create event form component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import CreateEventFormComponent from './CreateEvent.component';

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

export const CreateEventForm = connect(
    mapStateToProps,
    // mapDispatchToProps,
)(CreateEventFormComponent);
