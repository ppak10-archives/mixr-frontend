/**
 * Events.jsx
 * Events page component
 */

// Node Modules
import React, {useState} from 'react';

// Components
import {CreateEventForm} from '../components/forms/CreateEvent.container';
import {BaseMap, SearchInput} from 'react-map-elements';

// Constants
import {STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // State
  const [coordinates, setCoordinates] = useState({lat: 40, lng: 40});
  const [creatingEvent, setCreatingEvent] = useState(false);

  // Callbacks
  const onSearch = (results, status) => {
    if (status === 'OK') {
      setCoordinates({
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      });
    }
  };

  // Html Elements
  let createEventButtonHtml = '';
  if (props.sessionToken) {
    createEventButtonHtml = creatingEvent ? (
      <SearchInput searchCallback={onSearch} />
    ) : (
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={() => setCreatingEvent(!creatingEvent)}
        type="button"
      >
        {creatingEvent ? 'Cancel' : 'Create Event'}
      </button>
    );
  }

  const createEventForm =
    creatingEvent && props.sessionToken ? (
      <CreateEventForm coordinates={coordinates} />
    ) : (
      ''
    );
  return (
    <>
      {createEventButtonHtml}
      <BaseMap />
      {createEventForm}
    </>
  );
};

EventsPage.propTypes = {
  sessionToken: STRING,
};

export default EventsPage;
