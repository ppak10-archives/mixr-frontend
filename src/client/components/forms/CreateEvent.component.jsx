/**
 * CreateEvent.component.jsx
 * Form component htmlFor creating events
 */

// Node Modules
import React, {useState} from 'react';
import * as Datetime from 'react-datetime';

// Constants
import {NOW, WEEKDAY_MONTH_DATE_FORMAT, YESTERDAY} from '../../constants/time';

const CreateEventForm = () => {
  // State
  const [description, setDescription] = useState('');
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

  return (
    <div className="create-event-form-wrapper">
      <form>
        <div className="form-row">
          <div className="form-group col">
            <label>Start Time</label>
            <Datetime
              {...datetimeFieldProps}
              defaultValue={timeStart}
              isValidDate={(date) => date.isAfter(YESTERDAY)}
              onChange={onTimeStartChange}
            />
          </div>
          <div className="form-group col">
            <label>End Time</label>
            <Datetime
              {...datetimeFieldProps}
              isValidDate={(date) => date.isAfter(timeStart)}
              onChange={(value) => setTimeEnd(value)}
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
        <button className="btn btn-primary btn-block" type="submit">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
