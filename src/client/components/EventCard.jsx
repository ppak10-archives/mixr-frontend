/**
 * EventCard.jsx
 * Component for event card
 */

// Node Modules
import moment from 'moment';
import React from 'react';
import {BaseMap} from 'react-map-elements';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Constants
import {EVENT} from '../constants/proptypes';

export const EventCard = ({event}) => (
  <Card className="event-card">
    <Card.Header className="header">
      <BaseMap />
    </Card.Header>
    <Card.Body className="body">
      <Card.Title className="title">{event.title}</Card.Title>
      <Card.Text className="description">
        {event.description || 'No Description'}
      </Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>{moment(event.time_start).calendar()}</ListGroup.Item>
    </ListGroup>
  </Card>
);

EventCard.propTypes = {
  event: EVENT,
};
