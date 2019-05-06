/**
 * ChangeLocation.component.jsx
 * Form component to edit the location of an event
 */

// Node Modules
import React, {useEffect, useState} from 'react';
import {DynamicMap, PlacesSearch} from 'react-map-elements';

// Constants
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../../constants/map';
import {ACTION, EVENT, STATUS, STRING} from '../../constants/proptypes';

const ChangeLocationForm = ({eventDetails, getEventByIdStatus, ...props}) => {
  // State
  const [changeLocation, setChangeLocation] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  });
  const [place, setPlace] = useState(null);

  // Effects
  useEffect(() => {
    if (getEventByIdStatus.success) {
      setCoordinates({
        lat: eventDetails.lat,
        lng: eventDetails.lng,
      });
    }
  }, [getEventByIdStatus.success, eventDetails]);

  // Callbacks
  const onCancel = () => {
    setCoordinates({
      lat: eventDetails.lat,
      lng: eventDetails.lng,
    });
    setChangeLocation(!changeLocation);
    setPlace(null);
  };

  const onPlace = (place) => {
    setPlace(place);
    setCoordinates({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  const onSubmit = () => {
    props.updateEventById(props.sessionToken, eventDetails.id, {
      lat: coordinates.lat,
      lng: coordinates.lng,
    });
    props.getEventById(props.sessionToken, eventDetails.id);
  };

  // Html Elements
  const changeLocationButtonHtml = changeLocation ? (
    <PlacesSearch searchCallback={onPlace} />
  ) : (
    <div className="button-wrapper-top">
      <button onClick={() => setChangeLocation(!changeLocation)}>
        Change Event Location
      </button>
    </div>
  );

  const confirmCancelLocationButtonHtml = changeLocation ? (
    <div className="button-wrapper-bottom">
      <button onClick={onCancel}>Cancel</button>
      <button disabled={!place} onClick={onSubmit}>
        Confirm
      </button>
    </div>
  ) : (
    ''
  );

  return (
    <div className="change-location-form-wrapper">
      {changeLocationButtonHtml}
      <DynamicMap coordinates={coordinates} />
      {confirmCancelLocationButtonHtml}
    </div>
  );
};

ChangeLocationForm.propTypes = {
  eventDetails: EVENT,
  getEventById: ACTION,
  getEventByIdStatus: STATUS,
  sessionToken: STRING,
  updateEventById: ACTION,
};

export default ChangeLocationForm;
