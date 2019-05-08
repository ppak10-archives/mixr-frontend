/**
 * Alerts.container.js
 * Container for alerts component
 */

// Node Modules
import {connect} from 'react-redux';

// Components
import AlertsComponent from './Alerts.component';

const mapStateToProps = (state) => ({
  alerts: state.self.alerts,
});

export const Alerts = connect(mapStateToProps)(AlertsComponent);
