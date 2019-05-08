/**
 * Home.container.js
 * Container for home page component
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {createEvent} from '../actions/events';

// Components
import HomePageComponent from './Home.component';

const mapDispathToProps = (dispatch) => ({
  createEvent: (sessionToken, eventObject) =>
    dispatch(createEvent(sessionToken, eventObject)),
  resetEventStatus: () =>
    dispatch({
      type: 'CREATE_EVENT_INITIAL',
    }),
});

const mapStateToProps = (state) => ({
  createEventStatus: state.events.createEventStatus,
  sessionToken: state.authentication.sessionToken,
});

export const HomePage = connect(
    mapStateToProps,
    mapDispathToProps,
)(HomePageComponent);
