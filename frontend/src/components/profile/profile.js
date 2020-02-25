import React from 'react';
import SpotItem from '../spots/spot_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spots: []
        }
    }
    
<<<<<<< HEAD
    // componentWillMount() {
    //     console.log(this.props.currentUser.id)
    //     this.props.fetchUserSpots(this.props.currentUser.id);
    // }

    // componentWillReceiveProps(newState) {
    //     this.setState({ spots: newState.spots });
    // }   
    
    render() {
        if (this.state.spots.length === 0) {
          return (
            <div>
              <h1>profile.js</h1>
              This user has no Spottings
            </div>)
=======
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
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
        } else {
          return (
            <div>
              <h2>All of This User's Spottings</h2>
              {this.state.spots.map(spot => (
<<<<<<< HEAD
                <SpotItem key={spot.id} title={spot.title} body={spot.body} userId={spot.user_id} stopId={spot.stop_id} />
=======
                <SpotItem key={spot.id} text={spot.title} />
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
              ))}
            </div>
          );
        }
      }
}

export default Profile;