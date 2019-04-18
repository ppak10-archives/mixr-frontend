/**
 * authentication.js
 * Authentication routes to send request to back-end
 */

// Constants
import {REQUEST_DOMAIN} from '../constants/route';

/**
 * Login in method to provide access token in exchange for session token
 * @param {string} accessToken
 */
export const getNewSessionObjectRoute = async (accessToken) => {
  const payload = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      auth_service: 1, // TODO: standardize with server
      access_token: accessToken,
    }),
  };
  const response = await fetch(`${REQUEST_DOMAIN}/auth/login`, payload);
  return response.json();
};
