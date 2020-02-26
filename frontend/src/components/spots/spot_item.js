import React from 'react';

class SpotItem extends React.Component {
  render() {
    debugger
    return (
      <li key={this.props.key}>
        <h2>Spot ID: {this.props.key}</h2>
        <h3>Title: {this.props.title}</h3>
        <h4>Body: {this.props.body}</h4>
        <h5>User ID: {this.props.userId}</h5>
        <h5>Stop ID: {this.props.stopId}</h5>
      </li>
    );
  }
}

export default SpotItem;