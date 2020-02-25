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
    if (this.state.spots.length === 0) {
      return (<div>There are no Spottings</div>)
    } else {
      return (
        <div>
          <h2>All Spottings</h2>
          {this.state.spots.map(spot => (
            <SpotItem key={spot.id} text={spot.title} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Spots);