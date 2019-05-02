/**
 * CreateEvent.component.jsx
 * Form component for creating events
 */

// Node Modules
import React, {useState} from 'react';
import * as Datetime from 'react-datetime';

// Constants
import {ANACHRONISTIC_ERROR} from '../../constants/errors';
import {ACTION, COORDINATES, STRING} from '../../constants/proptypes';
import {NOW, WEEKDAY_MONTH_DATE_FORMAT, YESTERDAY} from '../../constants/time';

const CreateEventForm = (props) => {
  // State
  const [description, setDescription] = useState('');
  const [formErrors, setFormErrors] = useState(new Set());
  const [timeStart, setTimeStart] = useState(NOW);
  const [timeEnd, setTimeEnd] = useState(NOW);
  const [title, setTitle] = useState('');

  const datetimeFieldProps = {
    className: 'datetime-field',
    dateFormat: WEEKDAY_MONTH_DATE_FORMAT,
    inputProps: {
      readOnly: true,
    },
  };

  // Callbacks
  const onTimeStartChange = (value) => {
    setTimeStart(value);
    setTimeEnd(value);
  };

  const onTimeEndChange = (value) => {
    setTimeEnd(value);
    const validEndTime = timeStart.unix() <= value.unix();
    if (!validEndTime && !formErrors.has(ANACHRONISTIC_ERROR)) {
      setFormErrors(new Set(formErrors).add(ANACHRONISTIC_ERROR));
    } else if (validEndTime && formErrors.has(ANACHRONISTIC_ERROR)) {
      formErrors.delete(ANACHRONISTIC_ERROR);
      setFormErrors(new Set(formErrors));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      capacity: 0,
      description,
      fee: 0.0,
      icon_url: '',
      lat: props.coordinates.lat,
      lng: props.coordinates.lng,
      time_end: timeEnd.unix(),
      time_start: timeStart.unix(),
      title,
    };
    props.createEvent(props.sessionToken, eventObject);
  };

  return (
    <div className="create-event-form-wrapper">
      {Array.from(formErrors).map((error, index) => (
        <div className="alert alert-danger" key={index}>
          {error}
        </div>
      ))}
      <form>
        <div className="form-row">
          <div className="form-group col">
            <label>Start Time</label>
            <Datetime
              {...datetimeFieldProps}
              isValidDate={(date) => date.isAfter(YESTERDAY)}
              onChange={onTimeStartChange}
              value={timeStart}
            />
          </div>
          <div className="form-group col">
            <label>End Time</label>
            <Datetime
              {...datetimeFieldProps}
              isValidDate={(date) => date.isAfter(timeStart)}
              onChange={onTimeEndChange}
              value={timeEnd}
              viewMode="time"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Event Name</label>
          <input
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Networking Dinner, Lunch Meeting, etc."
            type="text"
            value={title}
          />
        </div>
        <div className="form-group">
          <label>Event Description</label>
          <textarea
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event to connect with others over good food"
            rows="3"
            value={description}
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          disabled={formErrors.size || !title.length}
          onClick={onSubmit}
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

CreateEventForm.propTypes = {
  coordinates: COORDINATES,
  createEvent: ACTION,
  sessionToken: STRING,
};

export default CreateEventForm;
