/**
 * CreateEvent.component.jsx
 * Form component htmlFor creating events
 */

// Node Modules
import moment from 'moment';
import React, {useState} from 'react';
import * as Datetime from 'react-datetime';

const CreateEventForm = () => {
  // State
  const [timeStart, setTimeStart] = useState(moment());
  const [timeEnd, setTimeEnd] = useState(moment());

  const datetimeFieldProps = {
    className: 'datetime-field',
    dateFormat: 'dddd, MMMM Do',
    inputProps: {
      readOnly: true,
    },
  };

  // Callbacks
  const onTimeStartChange = (date) => {
    setTimeStart(date);
    setTimeEnd(date);
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
              isValidDate={(date) => date.isAfter(moment().subtract(1, 'day'))}
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
            placeholder="Networking Dinner, Lunch Meeting, etc."
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Event Description</label>
          <textarea
            className="form-control"
            placeholder="Event to connect with others over good food"
            rows="3"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
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
