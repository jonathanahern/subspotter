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

    this.currentLine = "ALL";
    this.map = null;
    this.selectedLine = null;
    this.markersArray = [];

    this.handleLine = this.handleLine.bind(this);
    this.resetMarkers = this.resetMarkers.bind(this);
    this.placeMarkers = this.placeMarkers.bind(this);
    this.setDate = this.setDate.bind(this);

  }

  componentDidMount() {
    document.getElementById("datemin").defaultValue = "2018-01-02";
    this.setDate();

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

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }



  handleLine(e){
    e.preventDefault();
    let val = e.currentTarget.attributes.value.value.toLowerCase();
    this.selectedLine.className = '';
    this.selectedLine = e.currentTarget;
    e.currentTarget.className = 'border';
    this.currentLine = val
    this.setState({ line: val });
    this.resetMarkers();
  }

  setDate(){
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    if (month.toString().length < 2) {
      month = "0" + month.toString();
    }
    if (date.toString().length < 2) {
      date = "0" + date.toString();
    }
    document.getElementById("datemax").defaultValue = `${year}-${month}-${date}`;
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
    // console.log(this.currentLine)
  }

  render() {
    return (
      <>
      <form >

          <div id="filter-bar">
            <label className="filterLabel">START:
              <input className="date-dropdown" type="date" id="datemin" value={this.state.startDate} onChange={this.update("startDate")}/>
            </label>
            <label className="filterLabel">END:
              <input className="date-dropdown" type="date" id="datemax" value={this.state.endDate} onChange={this.update("endDate")} />
            </label>
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