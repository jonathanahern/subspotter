import React from 'react';
// import GoogleMap from './googleMap.js'
import "./map.css";

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.map = null;
    // this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.722207, lng: -73.949497 },
      zoom: 12,
      disableDefaultUI: true
    };

    this.map = new window.google.maps.Map(document.getElementById('myMap'), mapOptions);
    var transitLayer = new window.google.maps.TransitLayer();
    transitLayer.setMap(this.map);
    this.map.set('clickableIcons', false);
    this.map.set('styles', [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }]);
    // google.maps.event.addListener(this.map, 'click', (event) => {
    //   const pos = getPosObj(event.latLng);
    //   this.handleClick(pos);
    // });
  }


  render() {
    return (
      <div id="myMap"></div>
    );
  }
}

export default Map;