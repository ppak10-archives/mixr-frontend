/**
 * EventCard.component.jsx
 * Component for event card
 */

// Node Modules
import moment from 'moment';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {StaticMap} from 'react-map-elements';
import {withRouter} from 'react-router-dom';

// Constants
import {EVENT, REACT_ROUTER} from '../../constants/proptypes';

const EventCardComponent = (props) => (
  <Card
    className="event-card"
    onClick={() => props.history.push(`/events/${props.event.id}`)}
  >
    <Card.Header className="header">
      <StaticMap
        coordinates={{
          lat: props.event.lat,
          lng: props.event.lng,
        }}
      />
    </Card.Header>
    <Card.Body className="body">
      <Card.Title className="title">{props.event.title}</Card.Title>
      <Card.Text className="description">
        {props.event.description || 'No Description'}
      </Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>
        {moment(props.event.time_start).calendar()}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

EventCardComponent.propTypes = {
  ...REACT_ROUTER,
  event: EVENT,
};

export const EventCard = withRouter(EventCardComponent);
