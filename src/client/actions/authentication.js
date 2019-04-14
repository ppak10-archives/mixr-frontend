/**
 * authentication.js
 * Actions for user authentication
 */

// Actions
import {createError} from './error';

/**
 * Login protocol to dispatch actions to get session token
 * @param {string} serviceType
 * @return {null}
 */
// export const getSessionObject = (serviceType) => async (dispatch) => {
//   dispatch({type: 'STARTED_AUTHENTICATION'});
//   switch (serviceType) {
//     case 'FACEBOOK':
//       try {
//         const fbToken = await AccessToken.getCurrentAccessToken();
//         const response = await getSessionObjectRoute(fbToken);
//         if (response.session_token) {
//           dispatch({type: 'VALID_FB_TOKEN'});
//           await dispatch(storeSessionObject(response));
//           await dispatch(removeFBPermissions());
//           navigate('Authentication');
//           dispatch({type: 'FINISHED_AUTHENTICATION'});
//           dispatch(createAlert(finishedAuthentication()));
//         } else {
//           dispatch({type: 'INVALID_FB_TOKEN'});
//           dispatch(removeFBPermissions());
//         }
//       } catch (err) {
//         dispatch({type: 'FAILED_AUTHENTICATION'});
//         dispatch(removeFBPermissions());
//         // dispatch(createAlert(failedAuthentication()));
//         dispatch(createError(err));
//       }
//   }
// };

export const loadSessionObject = () => async (dispatch) => {
  try {
    const storedObject = localStorage.getItem('session');
    const sessionObject = JSON.parse(storedObject);
    if (sessionObject) {
      const {serviceType, sessionToken, userId} = sessionObject;
      dispatch({type: 'LOADED_SESSION_OBJECT', serviceType, sessionToken});
      dispatch({type: 'LOADED_USER_ID', userId});
    } else {
      dispatch({type: 'NO_SESSION_OBJECT'});
    }
  } catch (err) {
    dispatch(createError(err));
  }
};

// const storeSessionObject = (response) => async (dispatch) => {
//   try {
//     const sessionObject = {
//       serviceType: response.service_type,
//       sessionToken: response.session_token,
//       userId: response.id,
//     };
//     localStorage.setItem('session', JSON.stringify(sessionObject));
//     dispatch({type: 'STORED_SESSION_OBJECT'});
//     await dispatch(loadSessionObject());
//   } catch (err) {
//     dispatch(createError(err));
//   }
// };
