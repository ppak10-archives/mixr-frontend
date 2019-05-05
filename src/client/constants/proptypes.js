/**
 * proptypes.js
 * PropType constants for components
 */

// Node Modules
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

// Base PropTypes
export const ACTION = PropTypes.func.isRequired;
export const COMPONENT = PropTypes.node;
export const BOOLEAN = PropTypes.bool.isRequired;
export const FUNCTION = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;
export const STRING = PropTypes.string.isRequired;

// React Router PropTypes
export const REACT_ROUTER = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

// Specific PropTypes
export const COORDINATES = PropTypes.shape({
  lat: NUMBER,
  lng: NUMBER,
}).isRequired;

export const EVENT = PropTypes.shape({
  capacity: NUMBER,
  description: STRING,
  fee: NUMBER,
  icon_url: STRING,
  id: NUMBER,
  lat: NUMBER,
  lng: NUMBER,
  time_end: NUMBER,
  time_start: NUMBER,
  title: STRING,
});

export const EVENTS = PropTypes.arrayOf(EVENT);

export const STATUS = PropTypes.shape({
  failure: BOOLEAN,
  start: BOOLEAN,
  success: BOOLEAN,
});
