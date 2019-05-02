/**
 * Events.jsx
 * Events page component
 */

// Node Modules
import React, {useState} from 'react';

// Components
import {CreateEventForm} from '../components/forms/CreateEvent.container';
import {BaseMap, PlacesSearch} from 'react-map-elements';

// Constants
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../constants/map';
import {STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // State
  const [createEvent, setCreateEvent] = useState(false);
  const [place, setPlace] = useState(null);

  const placeAddress = place ? place.formatted_address : 'Unknown Address';
  const placeCoordinates = place
    ? {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }
    : {
      lat: DEFAULT_LATITUDE,
      lng: DEFAULT_LONGITUDE,
    };

  // Callbacks
  const onCancel = () => {
    setCreateEvent(!createEvent);
    setPlace(null);
  };

  // Html Elements
  const createEventButtonHtml =
    props.sessionToken && createEvent ? (
      <PlacesSearch searchCallback={(place) => setPlace(place)} />
    ) : (
      <div className="button-wrapper-top">
        <button
          disabled={!props.sessionToken}
          onClick={() => setCreateEvent(!createEvent)}
        >
          {!props.sessionToken
            ? 'Please Login to Create an Event'
            : 'Create Event'}
        </button>
      </div>
    );

  const continueCreateEventButtonHtml =
    props.sessionToken && createEvent ? (
      <div className="button-wrapper-bottom">
        <button onClick={onCancel}>Cancel</button>
        <button
          data-target="#createEventModal"
          data-toggle="modal"
          disabled={!place}
        >
          Continue
        </button>
      </div>
    ) : (
      ''
    );

  return (
    <div className="events-page-wrapper">
      {createEventButtonHtml}
      <BaseMap />
      {continueCreateEventButtonHtml}
      <div className="modal fade" id="createEventModal">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {`Creating event at ${placeAddress}`}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CreateEventForm coordinates={placeCoordinates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventsPage.propTypes = {
  sessionToken: STRING,
};

export default EventsPage;
