/**
 * events.js
 * Event routes for backend
 */

// Constants
import {REQUEST_DOMAIN} from '../constants/route';

// Helpers
import {getRequest} from './helpers';

export const createEventRoute = async (sessionToken, eventObject) => {
  const payload = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'session_token': sessionToken,
    },
    body: JSON.stringify(eventObject),
  };
  const response = await fetch(`${REQUEST_DOMAIN}/events/`, payload);
  return response.json();
};

export const getHostEventsRoute = async (sessionToken) => {
  const route = `${REQUEST_DOMAIN}/events/host`;
  return await getRequest(sessionToken, route);
};
