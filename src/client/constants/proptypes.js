/**
 * proptypes.js
 * PropType constants for components
 */

// Node Modules
import PropTypes from 'prop-types';

export const ACTION = PropTypes.func.isRequired;
export const BOOLEAN = PropTypes.bool.isRequired;
export const FUNCTION = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;
export const STRING = PropTypes.string.isRequired;

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
