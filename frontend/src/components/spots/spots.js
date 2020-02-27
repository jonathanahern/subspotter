import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotItem from './spot_item';

class Spots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spots: [],
    }
  }

  componentDidMount() {
    this.props.fetchAllSpots();
    debugger
    this.setState({ spots: this.props.spots });
    debugger
  }

  render() {
    debugger
    if (this.props.spots.length === 0) {
      return (
        <div>
          <h1>spots.js</h1>
          There are no Spottings
        </div>)
    } else {
      return (
        <div>
          <h2>All Spottings</h2>
          <ul>
          {this.props.spots.map(spot => (
            <SpotItem key={spot.id} title={spot.title} body={spot.body} userId={spot.user_id} stopId={spot.stop_id} />
          ))}
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(Spots);