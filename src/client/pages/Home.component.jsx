/**
 * Home.jsx
 * Home page component
 */

// Node Modules
import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {DynamicMap, PlacesSearch} from 'react-map-elements';

// Components
import {EventDetailsForm} from '../components/forms/EventDetails';

// Constants
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../constants/map';
import {ACTION, REACT_ROUTER, STATUS, STRING} from '../constants/proptypes';

const HomePage = ({createEventStatus, history, resetEventStatus, ...props}) => {
  // State
  const [coordinates, setCoordinates] = useState({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  });
  const [createEvent, setCreateEvent] = useState(false);
  const [place, setPlace] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  const placeAddress = place ? place.formatted_address : 'Unknown Address';

  // Effects
  useEffect(() => {
    if (createEventStatus.success) {
      setModalVisibility(false);
      resetEventStatus();
      history.push('/events');
    }
  }, [createEventStatus, history, resetEventStatus]);

  // Callbacks
  const onCancel = () => {
    setCreateEvent(!createEvent);
    setPlace(null);
  };

  const onCreate = (eventObject) => {
    eventObject.capacity = 0;
    eventObject.fee = 0.0;
    eventObject.icon_url = '';
    eventObject.lat = coordinates.lat;
    eventObject.lng = coordinates.lng;
    props.createEvent(props.sessionToken, eventObject);
  };

  const onPlace = (place) => {
    setPlace(place);
    setCoordinates({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  // Html Elements
  const createEventButtonHtml =
    props.sessionToken && createEvent ? (
      <PlacesSearch searchCallback={onPlace} />
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
        <button disabled={!place} onClick={() => setModalVisibility(true)}>
          Continue
        </button>
      </div>
    ) : (
      ''
    );

  return (
    <>
      {createEventButtonHtml}
      <DynamicMap coordinates={coordinates} />
      {continueCreateEventButtonHtml}
      <Modal
        show={modalVisibility}
        size="lg"
        onHide={() => setModalVisibility(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`Creating event at ${placeAddress}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventDetailsForm onSubmit={onCreate} />
        </Modal.Body>
      </Modal>
    </>
  );
};

HomePage.propTypes = {
  ...REACT_ROUTER,
  createEvent: ACTION,
  createEventStatus: STATUS,
  resetEventStatus: ACTION,
  sessionToken: STRING,
};

export default HomePage;
