/**
 * Togglebar.component.jsx
 * Component for events togglebar to filter events
 */

// Node Modules
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Constants
import {ACTION, BOOLEAN} from '../../constants/proptypes';

const EventsTogglebar = (props) => (
  <div className="event-togglebar-wrapper">
    <h5>Show Events</h5>
    <ButtonGroup vertical>
      <Button
        onClick={props.toggleShowOngoingEvents}
        variant={props.showOngoingEvents ? 'success' : 'outline-success'}
        disabled={props.showOngoingEvents}
      >
        Ongoing
      </Button>
      <Button
        onClick={props.toggleShowUpcomingEvents}
        variant={props.showUpcomingEvents ? 'primary' : 'outline-primary'}
        disabled={props.showUpcomingEvents}
      >
        Upcoming
      </Button>
      <Button
        onClick={props.toggleShowPastEvents}
        variant={props.showPastEvents ? 'secondary' : 'outline-secondary'}
        disabled={props.showPastEvents}
      >
        Past
      </Button>
    </ButtonGroup>
  </div>
);

EventsTogglebar.propTypes = {
  showOngoingEvents: BOOLEAN,
  showPastEvents: BOOLEAN,
  showUpcomingEvents: BOOLEAN,
  toggleShowOngoingEvents: ACTION,
  toggleShowPastEvents: ACTION,
  toggleShowUpcomingEvents: ACTION,
};

export default EventsTogglebar;
