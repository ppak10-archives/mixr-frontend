/**
 * events.js
 * Event routes for backend
 */

// Constants
import {REQUEST_DOMAIN} from '../constants/route';

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
