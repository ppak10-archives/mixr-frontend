/**
 * EventDetails.jsx
 * Form component for creating/editing event details
 */

// Node Modules
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as Datetime from 'react-datetime';

// Constants
import {ANACHRONISTIC_ERROR} from '../../constants/errors';
import {ICON_NAME_LIST} from '../../constants/events';
import {EVENT, FUNCTION, STRING} from '../../constants/proptypes';
import {
  MILLISECONDS_PER_SECOND,
  NOW,
  WEEKDAY_MONTH_DATE_FORMAT,
  YESTERDAY,
} from '../../constants/time';

export const EventDetailsForm = ({eventDetails, formType, ...props}) => {
  // State
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [formErrors, setFormErrors] = useState(new Set());
  const [eventObject, setEventObject] = useState({});
  const [timeEnd, setTimeEnd] = useState(NOW);
  const [timeStart, setTimeStart] = useState(NOW);
  const [title, setTitle] = useState('');
  const [validSubmit, setValidSubmit] = useState(false);

  // Effects
  useEffect(() => {
    if (formType === 'update' && Object.entries(eventDetails).length) {
      setDescription(eventDetails.description);
      setTimeEnd(eventDetails.time_end);
      setTimeStart(eventDetails.time_start);
      setTitle(eventDetails.title);
    } else if (formType === 'create') {
      setEditMode(true);
    }
  }, [eventDetails, formType]);

  useEffect(() => {
    setEventObject({
      description,
      title,
      time_end: timeEnd / MILLISECONDS_PER_SECOND,
      time_start: timeStart / MILLISECONDS_PER_SECOND,
    });
    if (
      editMode &&
      (eventDetails.description !== description ||
        eventDetails.time_end !== timeEnd ||
        eventDetails.time_start !== timeStart ||
        eventDetails.title !== title)
    ) {
      setValidSubmit(true);
    } else {
      setValidSubmit(false);
    }
  }, [editMode, eventDetails, description, timeEnd, timeStart, title]);

  // Callbacks
  const onToggleEdit = () => {
    if (editMode) {
      setDescription(eventDetails.description);
      setTimeEnd(eventDetails.time_end);
      setTimeStart(eventDetails.time_start);
      setTitle(eventDetails.title);
    }
    setEditMode(!editMode);
  };

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
    formType === 'update' ? (
      <div className="update-header">
        <div className="left">
          <Button onClick={onToggleEdit} variant="primary">
            {editMode ? 'Cancel' : 'Edit'}
          </Button>
        </div>
        {validSubmit ? (
          <Button onClick={() => props.onSubmit(eventObject)} variant="success">
            Save
          </Button>
        ) : (
          ''
        )}
      </div>
    ) : (
      ''
    );

  const createFooterHtml =
    formType === 'create' ? (
      <Button
        disabled={formErrors.size || !title.length}
        onClick={() => props.onSubmit(eventObject)}
        variant="primary"
      >
        Create Event
      </Button>
    ) : (
      ''
    );

  return (
    <div className="event-details-form-wrapper">
      {updateHeaderHtml}
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
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
          <Form.Label>Icon</Form.Label>
          <ButtonToolbar>
            {ICON_NAME_LIST.map((iconName, index) => (
              <Button className="icon" key={index} variant="outline-primary">
                <FontAwesomeIcon icon={iconName} />
              </Button>
            ))}
          </ButtonToolbar>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
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
      {createFooterHtml}
    </div>
  );
};

EventDetailsForm.propTypes = {
  eventDetails: EVENT,
  formType: STRING,
  onSubmit: FUNCTION,
};

EventDetailsForm.defaultProps = {
  eventDetails: {},
  formType: 'create',
};
