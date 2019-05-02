/**
 * events.js
 * Reducers for events actions
 */

const initialState = {
  createStatus: {
    failure: false,
    start: false,
    success: false,
  },
};

export const events = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'CREATE_EVENT_START':
      return {
        ...state,
        createStatus: {
          ...state.createStatus,
          start: true,
        },
      };
    default:
      return state;
  }
};
