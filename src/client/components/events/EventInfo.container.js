/**
 * EventInfo.container.js
 * Container for change info component
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {getEventById, updateEventById} from '../../actions/events';

// Components
import EventInfoComponent from './EventInfo.component';

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
});

export const EventInfo = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventInfoComponent);
