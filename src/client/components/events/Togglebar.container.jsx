/**
 * Togglebar.container.js
 * Container for events togglebar component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import EventsTogglebarComponent from './Togglebar.component';

const mapDispathToProps = (dispatch) => ({
  toggleShowOngoingEvents: () =>
    dispatch({
      type: 'TOGGLE_SHOW_ONGOING_EVENTS',
    }),
  toggleShowPastEvents: () =>
    dispatch({
      type: 'TOGGLE_SHOW_PAST_EVENTS',
    }),
  toggleShowUpcomingEvents: () =>
    dispatch({
      type: 'TOGGLE_SHOW_UPCOMING_EVENTS',
    }),
});

const mapStateToProps = (state) => ({
  showOngoingEvents: state.events.showOngoingEvents,
  showPastEvents: state.events.showPastEvents,
  showUpcomingEvents: state.events.showUpcomingEvents,
});

export const EventsTogglebar = connect(
    mapStateToProps,
    mapDispathToProps,
)(EventsTogglebarComponent);
