/**
 * Event.container.js
 * Container for event page
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {getEventById} from '../actions/events';

// Components
import EventPageComponent from './Event.component';

const mapDispatchToProps = (dispatch) => ({
  getEventById: (sessionToken, eventId) =>
    dispatch(getEventById(sessionToken, eventId)),
});

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const EventPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventPageComponent);
