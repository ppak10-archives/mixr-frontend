/**
 * Event.container.js
 * Container for event page
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {getEventById, updateEventById} from '../actions/events';

// Components
import EventPageComponent from './Event.component';

const mapDispatchToProps = (dispatch) => ({
  getEventById: (sessionToken, eventId) =>
    dispatch(getEventById(sessionToken, eventId)),
  updateEventById: (sessionToken, eventId, eventObject) =>
    dispatch(updateEventById(sessionToken, eventId, eventObject)),
});

const mapStateToProps = (state) => ({
  eventDetails: state.events.eventDetails,
  getEventByIdStatus: state.events.getEventByIdStatus,
  sessionToken: state.authentication.sessionToken,
  userId: state.self.userId,
});

export const EventPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventPageComponent);
