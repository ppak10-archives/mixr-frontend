/**
 * Navigation.jsx
 * Navigation component
 */

// Node Modules
import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => (
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
      <div
        className="fb-login-button"
        data-size="medium"
        data-auto-logout-link="true"
      />
    </div>
  </nav>
);
