import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotItem from './spot_item';

class Spots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spots: []
    }
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  componentWillReceiveProps(newState) {
    this.setState({ spots: newState.spots });
  }

  render() {
    debugger
    if (this.state.spots.length === 0) {
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
          {this.state.spots.map(spot => (
            <SpotItem key={spot.id} title={spot.title} body={spot.body} userId={spot.user_id} stopId={spot.stop_id} />
          ))}
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(Spots);