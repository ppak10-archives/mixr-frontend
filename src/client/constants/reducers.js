/**
 * reducers.js
 * Constants used within reducers
 */

export const SHOW_EVENTS_NONE = {
  showOngoingEvents: false,
  showPastEvents: false,
  showUpcomingEvents: false,
};

export const STATUS_INITIAL = {
  failure: false,
  start: false,
  success: false,
};

export const STATUS_START = {
  ...STATUS_INITIAL,
  start: true,
};

export const STATUS_SUCCESS = {
  ...STATUS_INITIAL,
  success: true,
};
