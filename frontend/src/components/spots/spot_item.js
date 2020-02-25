import React from 'react';

class SpotItem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.body}</h4>
        <h5>{this.props.userId}</h5>
        <h5>{this.props.stopId}</h5>
      </div>
    );
  }
}

export default SpotItem;