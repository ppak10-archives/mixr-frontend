/**
 * Events.jsx
 * Events page component
 */

// Node Modules
import React, {useState} from 'react';

// Components
import {CreateEventForm} from '../components/forms/CreateEvent.container';
import Map from 'react-map-elements';

// Constants
import {STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // State
  const [creatingEvent, setCreatingEvent] = useState(false);

  // Html Elements
  const createEventButtonHtml = props.sessionToken ? (
    <button
      className="btn btn-primary btn-lg btn-block"
      onClick={() => setCreatingEvent(!creatingEvent)}
      type="button"
    >
      {creatingEvent ? 'Cancel' : 'Create Event'}
    </button>
  ) : (
    ''
  );

  const createEventForm =
    creatingEvent && props.sessionToken ? <CreateEventForm /> : '';
  return (
    <>
      {createEventButtonHtml}
      <Map />
      {createEventForm}
    </>
  );
};

EventsPage.propTypes = {
  sessionToken: STRING,
};

export default EventsPage;
