/**
 * Events.component.jsx
 * Component for the events page
 */

// Node Modules
import moment from 'moment';
import React, {useEffect} from 'react';

// Components
import {EventCard} from '../components/EventCard';
import {EventTogglebar} from '../components/EventTogglebar.container';
import {Sidebar} from '../components/Sidebar';

// Constants
import {ACTION, BOOLEAN, EVENTS, STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // Props
  const {getHostEvents, sessionToken} = props;

  // filters
  const pastEventFilter = (event) => event.time_end < moment();
  const startedEventFilter = (event) =>
    event.time_start <= moment() && event.time_end >= moment();
  const upcomingEventFilter = (event) => event.time_start > moment();
  const filteredEvents = props.hostEvents.filter(
      (event) =>
        (props.showPastEvents && pastEventFilter(event)) ||
      (props.showStartedEvents && startedEventFilter(event)) ||
      (props.showUpcomingEvents && upcomingEventFilter(event)),
  );

  // Effects
  useEffect(() => {
    if (sessionToken) {
      getHostEvents(sessionToken);
    }
  }, [getHostEvents, sessionToken]);

  // Html Elements
  const eventsHtml = props.sessionToken ? (
    <>
      <Sidebar>
        <EventTogglebar />
      </Sidebar>
      <div className="event-cards-wrapper">
        <div className="event-cards-grid">
          {filteredEvents.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="center-layout-wrapper">
      <h3>Please Login to View Your Events</h3>
    </div>
  );

  return eventsHtml;
};

EventsPage.propTypes = {
  getHostEvents: ACTION,
  hostEvents: EVENTS,
  sessionToken: STRING,
  showPastEvents: BOOLEAN,
  showStartedEvents: BOOLEAN,
  showUpcomingEvents: BOOLEAN,
};

export default EventsPage;
