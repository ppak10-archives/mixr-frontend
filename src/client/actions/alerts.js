/**
 * alerts.js
 * Actions to dispatch alerts
 */

// Actions
import {createError} from './error';

// Constants
import {ALERT_DURATION} from '../constants/time';

export const createAlert = (alertObject) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATE_ALERT',
      alertObject,
    });
    setTimeout(
        () =>
          dispatch({
            type: 'REMOVE_ALERT',
          }),
        ALERT_DURATION,
    );
  } catch (err) {
    dispatch(createError(err));
  }
};
