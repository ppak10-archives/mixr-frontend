/**
 * Home.jsx
 * Home page component
 */

// Node Modules
import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';

// Components
import {CreateEventForm} from '../components/forms/CreateEvent.container';
import {BaseMap, PlacesSearch} from 'react-map-elements';

// Constants
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../constants/map';
import {ACTION, REACT_ROUTER, STATUS, STRING} from '../constants/proptypes';

const HomePage = (props) => {
  // Props
  const {createEventStatus, history, resetEventStatus} = props;

  // State
  const [createEvent, setCreateEvent] = useState(false);
  const [place, setPlace] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

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
      <BaseMap />
      {continueCreateEventButtonHtml}
      <Modal show={modalVisibility} onHide={() => setModalVisibility(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{`Creating event at ${placeAddress}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateEventForm coordinates={placeCoordinates} />
        </Modal.Body>
      </Modal>
    </>
  );
};

HomePage.propTypes = {
  ...REACT_ROUTER,
  createEventStatus: STATUS,
  resetEventStatus: ACTION,
  sessionToken: STRING,
};

export default HomePage;
