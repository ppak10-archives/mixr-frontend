/**
 * Events.component.jsx
 * Component for the events page
 */

// Node Modules
import moment from 'moment';
import React, {useEffect} from 'react';

// Components
import {EventCard} from '../components/events/EventCard';
import {EventsTogglebar} from '../components/events/Togglebar.container';
import {Sidebar} from '../components/Sidebar';

// Constants
import {ACTION, BOOLEAN, EVENTS, STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // Props
  const {getHostEvents, sessionToken} = props;

  // Filters
  const ongoingEventFilter = (event) =>
    event.time_start <= moment() && event.time_end >= moment();
  const pastEventFilter = (event) => event.time_end < moment();
  const upcomingEventFilter = (event) => event.time_start > moment();
  const filteredEvents = props.hostEvents.filter(
      (event) =>
        (props.showOngoingEvents && ongoingEventFilter(event)) ||
      (props.showPastEvents && pastEventFilter(event)) ||
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
    <div className="flex-layout-wrapper">
      <Sidebar>
        <EventsTogglebar />
      </Sidebar>
      <div className="event-cards-wrapper">
        <div className="event-cards-grid">
          {filteredEvents.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
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
  showOngoingEvents: BOOLEAN,
  showPastEvents: BOOLEAN,
  showUpcomingEvents: BOOLEAN,
};

export default EventsPage;
