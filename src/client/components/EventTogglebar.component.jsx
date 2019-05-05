/**
 * EventTogglebar.component.jsx
 * Component for event togglebar to filter events
 */

// Node Modules
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Constants
import {ACTION, BOOLEAN} from '../constants/proptypes';

const EventTogglebar = (props) => (
  <div className="event-togglebar-wrapper">
    <h5>Show Events</h5>
    <ButtonGroup vertical>
      <Button
        onClick={props.toggleShowStartedEvents}
        variant={props.showStartedEvents ? 'success' : 'outline-success'}
        disabled={props.showStartedEvents}
      >
        Started
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

EventTogglebar.propTypes = {
  showPastEvents: BOOLEAN,
  showStartedEvents: BOOLEAN,
  showUpcomingEvents: BOOLEAN,
  toggleShowPastEvents: ACTION,
  toggleShowStartedEvents: ACTION,
  toggleShowUpcomingEvents: ACTION,
};

export default EventTogglebar;
