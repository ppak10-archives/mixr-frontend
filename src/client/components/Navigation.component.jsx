/**
 * Navigation.component.jsx
 * Navigation component
 */

// Node Modules
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {Link} from 'react-router-dom';

// PropTypes
import {ACTION_PROPTYPE, BOOLEAN_PROPTYPE} from '../constants/proptypes';

export const Navigation = (props) => {
  const loginButtonHtml = props.fbLoginStatus ? (
    <button onClick={() => FB.logout(props.getFBLoginStatus)}>Logout</button>
  ) : (
    <FacebookLogin
      appId="232083774403273"
      fields="name,email,picture"
      callback={props.getFBLoginStatus}
      icon="fa-facebook"
      size="small"
      textButton="Login with Facebook"
    />
  );
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">
        mixr
      </Link>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {loginButtonHtml}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  getFBLoginStatus: ACTION_PROPTYPE,
  fbLoginStatus: BOOLEAN_PROPTYPE,
};
