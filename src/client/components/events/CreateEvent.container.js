/**
 * CreateEvent.container.js
 * Container for create event form component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import CreateEventFormComponent from './CreateEvent.component';

// Actions
import {createEvent} from '../../actions/events';

const mapDispatchToProps = (dispatch) => ({
  createEvent: (sessionToken, eventObject) =>
    dispatch(createEvent(sessionToken, eventObject)),
});

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
  createEventStatus: state.events.createEventStatus,
});

export const CreateEventForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateEventFormComponent);
