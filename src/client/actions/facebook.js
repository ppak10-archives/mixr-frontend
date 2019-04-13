/**
 * facebook.js
 * Facebook actions
 */

export const getFBLoginStatus = () => async (dispatch) => {
  try {
    FB.getLoginStatus((response) => {
      // console.log(response);
      if (response.status === 'connected') {
        dispatch({
          type: 'FB_LOGIN_STATUS_SUCCESS',
        });
      } else {
        dispatch({
          type: 'FB_LOGIN_STATUS_FAILURE',
        });
      }
    });
  } catch (err) {
    // console.log(err);
  }
};
