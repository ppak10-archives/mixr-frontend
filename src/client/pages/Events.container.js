/**
 * Events.container.js
 * Container for events page
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {getHostEvents} from '../actions/events';

// Components
import EventsPageComponent from './Events.component';

const mapDispatchToProps = (dispatch) => ({
  getHostEvents: (sessionToken) => dispatch(getHostEvents(sessionToken)),
});

const mapStateToProps = (state) => ({
  hostEvents: state.events.hostEvents,
  sessionToken: state.authentication.sessionToken,
  showPastEvents: state.events.showPastEvents,
  showStartedEvents: state.events.showStartedEvents,
  showUpcomingEvents: state.events.showUpcomingEvents,
});

export const EventsPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventsPageComponent);
