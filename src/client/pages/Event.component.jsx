/**
 * Event.component.jsx
 * Evemt page component
 */

// Node Modules
import classNames from 'classnames';
import React from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';

// Components
import {ChangeLocationForm} from '../components/forms/ChangeLocation.container';
import {Sidebar} from '../components/Sidebar';

// Constants
import {REACT_ROUTER, STRING} from '../constants/proptypes';

const EventPage = (props) => {
  // ClassNames
  const linkClassName = (route) =>
    classNames('sidebar-link', {
      active: props.history.location.pathname === `${props.match.url}/${route}`,
    });
  // Html Elements
  const eventPageHtml = props.sessionToken ? (
    <>
      <Sidebar>
        <Link className={linkClassName('map')} to={`${props.match.url}/map`}>
          Map
        </Link>
        <Link className={linkClassName('info')} to={`${props.match.url}/info`}>
          Info
        </Link>
      </Sidebar>
      <Switch>
        <Redirect exact from={props.match.url} to={`${props.match.url}/info`} />
        <Route path={`${props.match.url}/map`} component={ChangeLocationForm} />
        <Route path={`${props.match.url}/info`} component={Sidebar} />
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
  sessionToken: STRING,
};

export default EventPage;
