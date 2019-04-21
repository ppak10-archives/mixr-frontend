/**
 * CreateEvent.component.jsx
 * Form component htmlFor creating events
 */

// Node Modules
import React from 'react';

const CreateEventForm = () => {
  return (
    <div className="create-event-form-wrapper">
      <form>
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
