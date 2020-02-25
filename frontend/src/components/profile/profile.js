import React from 'react';
import SpotItem from '../spots/spot_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spots: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserSpots(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ spots: newState.spots });
    }   
    
    render() {
        if (this.state.spots.length === 0) {
          return (<div>This user has no Spottings</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Spottings</h2>
              {this.state.spots.map(spot => (
                <SpotItem key={spot.id} text={spot.title} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;