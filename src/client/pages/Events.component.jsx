/**
 * Events.component.jsx
 * Component for the events page
 */

// Node Modules
import React, {useEffect} from 'react';

// Components
import {EventCard} from '../components/EventCard';
import {Sidebar} from '../components/Sidebar';

// Constants
import {ACTION, EVENTS, STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  const {getHostEvents, sessionToken} = props;
  // Effects
  useEffect(() => {
    if (sessionToken) {
      getHostEvents(sessionToken);
    }
  }, [getHostEvents, sessionToken]);

  // Html Elements
  const eventsHtml = props.sessionToken ? (
    <div className="event-cards-wrapper">
      <div className="event-cards-grid">
        {props.hostEvents.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  ) : (
    <p>Please login to view events</p>
  );

  return (
    <>
      <Sidebar />
      {eventsHtml}
    </>
  );
};

EventsPage.propTypes = {
  getHostEvents: ACTION,
  hostEvents: EVENTS,
  sessionToken: STRING,
};

export default EventsPage;
