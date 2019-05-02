/**
 * Events.container.js
 * Container for events page
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import EventsPageComponent from './Events.component';

const mapStateToProps = (state) => ({
  sessionToken: state.authentication.sessionToken,
});

export const EventsPage = connect(mapStateToProps)(EventsPageComponent);
