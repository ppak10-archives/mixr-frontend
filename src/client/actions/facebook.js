/**
 * facebook.js
 * Facebook actions
 */

// Actions
import {
  getNewSessionObject,
  loadSessionObject,
  removeSessionObject,
} from './authentication';
import {createError} from './error';

export const initializeFBAPI = () => (dispatch) => {
  try {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '232083774403273',
        autoLogAppEvents: true,
        version: 'v3.2',
        xfbml: true,
      });
      // Initializes subscription when page first loads
      FB.getLoginStatus();
      FB.Event.subscribe('auth.statusChange', (response) =>
        // Dispatches actions according to facebook authentication status change
        dispatch(statusChange(response)),
      );
    };
  } catch (err) {
    dispatch(createError(err));
  }
};

const statusChange = (response) => (dispatch) => {
  try {
    const {authResponse, status} = response;
    if (status === 'connected') {
      // Attempt to load session object, otherwise create one
      const sessionObjectStatus = dispatch(loadSessionObject());
      if (!sessionObjectStatus) {
        dispatch(getNewSessionObject('FACEBOOK', authResponse.accessToken));
      }
    } else {
      // If status of FB login changes from connected, remove the session object
      dispatch(removeSessionObject());
    }
  } catch (err) {
    dispatch(createError(err));
  }
};
