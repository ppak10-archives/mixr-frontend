/**
 * Alerts.component.jsx
 * Component to display app wide alerts to the user
 */

// Node Modules
import React from 'react';
import Alert from 'react-bootstrap/Alert';

// Constants
import {ALERTS} from '../constants/proptypes';

const Alerts = ({alerts}) => (
  <div className="alerts-wrapper">
    {alerts.map((alert, index) => (
      <Alert className="alert" key={index} variant={alert.type}>
        {alert.message}
      </Alert>
    ))}
  </div>
);

Alerts.propTypes = {
  alerts: ALERTS,
};

export default Alerts;
