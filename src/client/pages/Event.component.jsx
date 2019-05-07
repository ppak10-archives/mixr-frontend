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
import {ChangeInfoForm} from '../components/forms/ChangeInfo.container';
import {Sidebar} from '../components/Sidebar';

// Constants
import {ACTION, REACT_ROUTER, STRING} from '../constants/proptypes';

const EventPage = ({getEventById, sessionToken, match, ...props}) => {
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
  const eventPageHtml = sessionToken ? (
    <>
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
        <Route path={`${match.url}/info`} component={ChangeInfoForm} />
      </Switch>
    </>
  ) : (
    <div className="center-layout-wrapper">
      <h3>Please Login to View Event</h3>
    </div>
  );
  return eventPageHtml;
};

EventPage.propTypes = {
  ...REACT_ROUTER,
  getEventById: ACTION,
  sessionToken: STRING,
};

export default EventPage;
