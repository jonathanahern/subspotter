import React from 'react';
// import GoogleMap from './googleMap.js'
import "./map.css";

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      line: "ALL",
      startDate: "2018-01-01",
      endDate: "2020-03-01"
    };

    this.map = null;
    this.selectedLine = null;
    this.markersArray = [];

    this.handleLine = this.handleLine.bind(this);
    this.resetMarkers = this.resetMarkers.bind(this);

  }

  componentDidMount() {
    document.getElementById("datemin").defaultValue = "2018-01-01";
    document.getElementById("datemax").defaultValue = "2020-03-01";

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
    
    this.selectedLine = document.getElementById("spanALL");
    
  }

  handleLine(e){
    e.preventDefault();
    let val = e.currentTarget.attributes.value.value;
    this.selectedLine.className = '';
    this.selectedLine = e.currentTarget;
    e.currentTarget.className = 'border';
    this.setState({ line: val.toLowerCase() })
    this.resetMarkers();
  }

  resetMarkers(){
    for (let i = 0; i < this.markersArray.length; i++) {
      const badMarker = this.markersArray[i];
      badMarker.setMap(null);
    }
    this.markersArray = [];
    this.placeMarkers();
  }

  placeMarkers(){

  }


  render() {
    return (
      <>
      <form >
          <div id="filter-bar">
          <label className="filterLabel">START:
            <input className="date-dropdown" type="date" id="datemin" name="datemin" />
          </label>
          <label className="filterLabel">END:
            <input className="date-dropdown" type="date" id="datemax" name="datemax" />
          </label>
          {/* <label className="filterLabel">SUBWAY LINE:
          <select id="line-dropdown">
            <option key="ALL" value="ALL">ALL</option>
            <option id="option123" key="123" value="123">123</option>
            <option key="456" value="456">456</option>
            <option key="7" value="7">7</option>
            <option key="ACE" value="ACE">ACE</option>
            <option key="G" value="G">G</option>
            <option key="BDFM" value="BDFM">BDFM</option>
            <option key="JZ" value="JZ">JZ</option>
            <option key="LS" value="LS">LS</option>
            <option key="NQRW" value="NQRW">NQRW</option>
          </select>
          </label> */}
          </div>

          <div id="line-select">
            <span id="spanALL" className="border" id="spanALL" value="ALL" onClick={this.handleLine}>ALL</span>
            <span id="span123" value="123" onClick={this.handleLine}>123</span>
            <span id="span456" value="456" onClick={this.handleLine}>456</span>
            <span id="span7" value="7" onClick={this.handleLine}> 7 </span>
            <span id="spanACE" value="ACE" onClick={this.handleLine}>ACE</span>
            <span id="spanG" value="G" onClick={this.handleLine}> G </span>
            <span id="spanBDFM" value="BDFM" onClick={this.handleLine}>BDF</span>
            <span id="spanJZ" value="JZ" onClick={this.handleLine}>JZ</span>
            <span id="spanLS" value="LS" onClick={this.handleLine}>LS</span>
            <span id="spanNQRW" value="NQRW" onClick={this.handleLine}>NQR</span>
          </div>
      </form>

      <div id="myMap"></div>
      </>
    );
  }
}

export default Map;