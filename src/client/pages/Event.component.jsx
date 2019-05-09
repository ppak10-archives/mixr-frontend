/**
 * Event.component.jsx
 * Evemt page component
 */

// Node Modules
import classNames from 'classnames';
import React, {useEffect} from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';

// Components
import {ChangeLocationForm} from '../components/forms/ChangeLocation.container';
import {EventDetailsForm} from '../components/forms/EventDetails';
import {Sidebar} from '../components/Sidebar';

// Constants
import {ACTION, EVENT, REACT_ROUTER, STRING} from '../constants/proptypes';

const EventPage = ({getEventById, sessionToken, match, ...props}) => {
  // Callbacks
  const onUpdate = (eventObject) => {
    props.updateEventById(sessionToken, props.eventDetails.id, eventObject);
  };

  // ClassNames
  const linkClassName = (route) =>
    classNames('sidebar-link', {
      active: props.history.location.pathname === `${match.url}/${route}`,
    });

  // Effects
  useEffect(() => {
    if (sessionToken) {
      getEventById(sessionToken, match.params.eventId);
    }
  }, [getEventById, match.params.eventId, sessionToken]);

  // Html Elements
  let eventPageHtml = (
    <div className="center-layout-wrapper">
      <h3>Please Login to View Event</h3>
    </div>
  );
  if (sessionToken) {
    eventPageHtml =
      Object.entries(props.eventDetails).length &&
      props.eventDetails.user.id === props.userId ? (
        <div className="flex-layout-wrapper">
          <Sidebar>
            <Link className={linkClassName('info')} to={`${match.url}/info`}>
              Info
            </Link>
            <Link className={linkClassName('map')} to={`${match.url}/map`}>
              Map
            </Link>
          </Sidebar>
          <Switch>
            <Redirect exact from={match.url} to={`${match.url}/info`} />
            <Route path={`${match.url}/map`} component={ChangeLocationForm} />
            <Route
              path={`${match.url}/info`}
              render={() => (
                <div className="padded-flex-layout-wrapper">
                  <EventDetailsForm
                    eventDetails={props.eventDetails}
                    formType="update"
                    onSubmit={onUpdate}
                  />
                </div>
              )}
            />
          </Switch>
        </div>
      ) : (
        <div className="center-layout-wrapper">
          <h3>You are not a host for this event</h3>
        </div>
      );
  }
  return eventPageHtml;
};

EventPage.propTypes = {
  ...REACT_ROUTER,
  eventDetails: EVENT,
  getEventById: ACTION,
  sessionToken: STRING,
  updateEventById: ACTION,
};

export default EventPage;
