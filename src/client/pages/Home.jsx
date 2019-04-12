/**
 * Home.jsx
 * Home page component
 */

// Node Modules
import React from 'react';
import Map from 'react-map-elements';

export class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="page-top" />
        <Map />
        <div className="page-bottom" />
      </>
    );
  }
}
