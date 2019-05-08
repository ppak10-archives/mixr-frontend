/**
 * Togglebar.container.js
 * Container for events togglebar component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import EventsTogglebarComponent from './Togglebar.component';

const mapDispathToProps = (dispatch) => ({
  toggleShowPastEvents: () =>
    dispatch({
      type: 'TOGGLE_SHOW_PAST_EVENTS',
    }),
  toggleShowStartedEvents: () =>
    dispatch({
      type: 'TOGGLE_SHOW_STARTED_EVENTS',
    }),
  toggleShowUpcomingEvents: () =>
    dispatch({
      type: 'TOGGLE_SHOW_UPCOMING_EVENTS',
    }),
});

const mapStateToProps = (state) => ({
  showPastEvents: state.events.showPastEvents,
  showStartedEvents: state.events.showStartedEvents,
  showUpcomingEvents: state.events.showUpcomingEvents,
});

export const EventsTogglebar = connect(
    mapStateToProps,
    mapDispathToProps,
)(EventsTogglebarComponent);
