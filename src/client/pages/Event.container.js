/**
 * Event.container.js
 * Container for event page
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {getHostEvents} from '../actions/events';

// Components
import EventPageComponent from './Event.component';

const mapDispatchToProps = (dispatch) => ({
  getHostEvents: (sessionToken) => dispatch(getHostEvents(sessionToken)),
});

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const EventPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventPageComponent);
