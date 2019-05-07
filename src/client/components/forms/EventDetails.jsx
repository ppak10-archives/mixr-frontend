/**
 * EventDetails.jsx
 * Form component for creating/editing event details
 */

// Node Modules
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as Datetime from 'react-datetime';

// Constants
import {ANACHRONISTIC_ERROR} from '../../constants/errors';
import {ACTION, COORDINATES, STATUS, STRING} from '../../constants/proptypes';
import {NOW, WEEKDAY_MONTH_DATE_FORMAT, YESTERDAY} from '../../constants/time';

export const EventDetailsForm = ({...props}) => {
  // State
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [formErrors, setFormErrors] = useState(new Set());
  const [timeStart, setTimeStart] = useState(NOW);
  const [timeEnd, setTimeEnd] = useState(NOW);
  const [title, setTitle] = useState('');

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

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const eventObject = {
  //     capacity: 0,
  //     description,
  //     fee: 0.0,
  //     icon_url: '',
  //     lat: props.coordinates.lat,
  //     lng: props.coordinates.lng,
  //     time_end: timeEnd.unix(),
  //     time_start: timeStart.unix(),
  //     title,
  //   };
  //   props.createEvent(props.sessionToken, eventObject);
  // };

  // Component Props
  const datetimeFieldProps = {
    dateFormat: WEEKDAY_MONTH_DATE_FORMAT,
    inputProps: {
      disabled: !editMode,
      readOnly: true,
    },
  };

  // Html Elements
  const updateHeaderHtml =
    props.formType === 'update' ? (
      <div>
        <Button onClick={() => setEditMode(!editMode)} variant="primary">
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
      </div>
    ) : (
      ''
    );

  return (
    <div className="event-details-form-wrapper">
      {updateHeaderHtml}
      <Form>
        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            disabled={!editMode}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Networking Dinner, Lunch Meeting, etc."
            required
            type="text"
            value={title}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Start Time</Form.Label>
            <Datetime
              {...datetimeFieldProps}
              isValidDate={(date) => date.isAfter(YESTERDAY)}
              onChange={onTimeStartChange}
              value={timeStart}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>End Time</Form.Label>
            <Datetime
              {...datetimeFieldProps}
              isValidDate={(date) => date.isAfter(timeStart)}
              onChange={onTimeEndChange}
              value={timeEnd}
              viewMode="time"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            as="textarea"
            disabled={!editMode}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event to connect with others over good food"
            rows="3"
            value={description}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

EventDetailsForm.propTypes = {
  coordinates: COORDINATES,
  createEvent: ACTION,
  createEventStatus: STATUS,
  formType: STRING,
  sessionToken: STRING,
};

EventDetailsForm.defaultProps = {
  formType: 'create',
};
