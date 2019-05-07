/**
 * ChangeInfo.component.jsx
 * Form component to change event information
 */

// Node Modules
import React from 'react';

// Components
import {EventDetailsForm} from './EventDetails';

// Constants
import {ACTION, EVENT, STATUS, STRING} from '../../constants/proptypes';

const ChangeInfoForm = ({eventDetails, getEventByIdStatus, ...props}) => {
  // Callbacks
  const onUpdate = (eventObject) => {
    props.updateEventById(props.sessionToken, eventDetails.id, eventObject);
  };
  return (
    <EventDetailsForm
      eventDetails={eventDetails}
      formType="update"
      onSubmit={onUpdate}
    />
  );
};

ChangeInfoForm.propTypes = {
  eventDetails: EVENT,
  getEventById: ACTION,
  getEventByIdStatus: STATUS,
  sessionToken: STRING,
  updateEventById: ACTION,
};

export default ChangeInfoForm;
