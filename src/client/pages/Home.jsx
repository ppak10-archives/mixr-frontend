/**
 * Home.jsx
 * Home page component
 */

// Node Modules
import React, {createRef} from 'react';

export class HomePage extends React.Component {
  constructor() {
    super();
    this.map = createRef();
  }

  componentDidMount() {
    new google.maps.Map(this.map.current, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    });
  }

  render() {
    return <div className="map" ref={this.map} />;
  }
}
