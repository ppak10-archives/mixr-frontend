/**
 * ChangeLocation.container.js
 * Container for change location component
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {getEventById, updateEventById} from '../../actions/events';

// Components
import ChangeLocationFormComponent from './ChangeLocation.component';

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

export const ChangeLocationForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChangeLocationFormComponent);
