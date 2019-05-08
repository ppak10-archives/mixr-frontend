/**
 * EventInfo.component.jsx
 * Form component to view and change event information
 */

// Node Modules
import React from 'react';

// Components
import {EventDetailsForm} from '../forms/EventDetails';

// Constants
import {ACTION, EVENT, STATUS, STRING} from '../../constants/proptypes';

const EventInfo = ({eventDetails, getEventByIdStatus, ...props}) => {
  // Callbacks
  const onUpdate = (eventObject) => {
    props.updateEventById(props.sessionToken, eventDetails.id, eventObject);
  };

  return (
    <div className="flex-layout-wrapper">
      <EventDetailsForm
        eventDetails={eventDetails}
        formType="update"
        onSubmit={onUpdate}
      />
    </div>
  );
};

EventInfo.propTypes = {
  eventDetails: EVENT,
  getEventById: ACTION,
  getEventByIdStatus: STATUS,
  sessionToken: STRING,
  updateEventById: ACTION,
};

export default EventInfo;
