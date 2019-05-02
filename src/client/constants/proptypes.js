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
