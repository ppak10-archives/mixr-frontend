/**
 * Events.jsx
 * Events page component
 */

// Node Modules
import React, {useState} from 'react';

// Components
import {CreateEventForm} from '../components/forms/CreateEvent.container';
import {BaseMap, PlacesSearch} from 'react-map-elements';

// Constants
import {STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // State
  const [creatingEvent, setCreatingEvent] = useState(false);
  const [place, setPlace] = useState(null);

  // Html Elements
  const createEventButtonHtml =
    props.sessionToken && creatingEvent ? (
      <PlacesSearch searchCallback={(place) => setPlace(place)} />
    ) : (
      <div className="button-wrapper">
        <button
          disabled={!props.sessionToken}
          onClick={() => setCreatingEvent(!creatingEvent)}
        >
          {!props.sessionToken
            ? 'Please Login to Create an Event'
            : 'Create Event'}
        </button>
      </div>
    );

  return (
    <div className="events-page-wrapper">
      {createEventButtonHtml}
      <BaseMap />
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#createEventModal"
      >
        Launch demo modal
      </button>
      <div className="modal fade" id="createEventModal">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CreateEventForm place={place} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventsPage.propTypes = {
  sessionToken: STRING,
};

export default EventsPage;
