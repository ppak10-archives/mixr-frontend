/**
 * CreateEvent.component.jsx
 * Form component htmlFor creating events
 */

// Node Modules
import React, {useState} from 'react';
import * as Datetime from 'react-datetime';

// Constants
import {NOW, WEEKDAY_MONTH_DATE_FORMAT, YESTERDAY} from '../../constants/time';
import {ANACHRONISTIC_ERROR} from '../../constants/errors';

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
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          disabled={formErrors.size || !title.length}
          type="submit"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
