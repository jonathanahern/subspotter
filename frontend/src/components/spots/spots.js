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
<<<<<<< HEAD
      return (
        <div>
          <h1>spots.js</h1>
          There are no Spottings
        </div>)
=======
      return (<div>There are no Spottings</div>)
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
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