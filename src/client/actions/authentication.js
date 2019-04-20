/**
 * authentication.js
 * Actions for user authentication
 */

// Actions
import {createError} from './error';

// API Routes
import {getNewSessionObjectRoute} from '../api/authentication';

/**
 * Login protocol to dispatch actions to get session token
 * @param {string} serviceType
 * @param {string} accessToken
 * @return {null}
 */
export const getNewSessionObject = (serviceType, accessToken) => async (
  dispatch,
) => {
  switch (serviceType) {
    case 'FACEBOOK':
      try {
        const response = await getNewSessionObjectRoute(accessToken);
        if (response.session_token) {
          dispatch(storeSessionObject(response));
        } else {
          dispatch({
            type: 'FACEBOOK_AUTHENTICATION_FAILURE',
          });
        }
      } catch (err) {
        dispatch(createError(err));
      }
  }
};

/**
 * Load session object cookie
 * @return {boolean}
 */
export const loadSessionObject = () => (dispatch) => {
  try {
    const storedObject = localStorage.getItem('session');
    const sessionObject = JSON.parse(storedObject);
    if (sessionObject) {
      const {serviceType, sessionToken, userId} = sessionObject;
      dispatch({
        type: 'LOAD_SESSION_OBJECT_SUCCESS',
        serviceType,
        sessionToken,
      });
      dispatch({
        type: 'LOADED_USER_ID',
        userId,
      });
      return true;
    } else {
      dispatch({
        type: 'LOAD_SESSION_OBJECT_FAILURE',
      });
      return false;
    }
  } catch (err) {
    dispatch(createError(err));
    return false;
  }
};

/**
 * Remove session object cookie for logout
 * @return {null}
 */
export const removeSessionObject = () => (dispatch) => {
  try {
    localStorage.removeItem('session');
    dispatch({
      type: 'REMOVE_SESSION_OBJECT_SUCCESS',
    });
  } catch (err) {
    dispatch(createError(err));
  }
};

const storeSessionObject = (response) => (dispatch) => {
  try {
    const sessionObject = {
      serviceType: response.service_type,
      sessionToken: response.session_token,
      userId: response.id,
    };
    localStorage.setItem('session', JSON.stringify(sessionObject));
    dispatch({type: 'STORED_SESSION_OBJECT'});
    dispatch(loadSessionObject());
  } catch (err) {
    dispatch(createError(err));
  }
};
