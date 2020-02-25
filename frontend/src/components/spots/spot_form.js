import React from 'react';
import SpotItem from './spot_item';

class SpotForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: "",
          body: "",
          // user_id: this.props.currentUser.id,
          stop_id: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newSpot: nextProps.newSpot.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let spot = {
      title: this.state.title
    };

    this.props.composeSpot(spot); 
    this.setState({title: ''})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
          <h1>spot_form.js</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder="report your Spotting"
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <SpotItem text={this.state.newSpot} />
        </div>
    )
  }
}

export default SpotForm;