import React from 'react';
import SpotItem from './spot_item';

class SpotForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          spot_type: "",
          description: "",
          user_id: this.props.currentUser.id,
          stop_id: "",
      }

      this.line = null;
      this.stopOptions = [];

      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateLine = this.updateLine.bind(this);
  } 

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newSpot: nextProps.newSpot.text});
  // }

  handleSubmit(e) {
    e.preventDefault();
    let spot = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.state.user_id,
      stop_id: this.state.stop_id,
    };

    this.props.composeSpot(spot); 
    this.setState({
      title: '',
      body: '',
      stop_id: '',
  })
    
  }

  updateLine(){
    return e => {
      let val = e.currentTarget.value;
      return this.line = val;
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
        for (var i = 2008; i >= 1900; i--) {
          this.stopOptions.push(
            <option key={i.toString() + "year"} value={i}>
              {i}
            </option>
          );
        }
    return (
      <div>
        <h1>SPOT IT</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <select id="lineDropdown" value={this.state.line} onChange={this.updateLine()} >
              <option key="default-line" value="default" selected>LINES</option> 
              <option key="1-line" value="1">1</option>
              <option key="2-line" value="2">2</option>
              <option key="3-line" value="3">3</option>
              <option key="4-line" value="4">4</option>
              <option key="5-line" value="5">5</option>
              <option key="6-line" value="6">6</option>
              <option key="A-line" value="A">A</option>
              <option key="2-line" value="B">B</option>
              <option key="3-line" value="C">C</option>
              <option key="4-line" value="D">D</option>
              <option key="5-line" value="E">E</option>
              <option key="6-line" value="F">F</option>
              <option key="1-line" value="G">G</option>
              <option key="2-line" value="J">J</option>
              <option key="3-line" value="L">L</option>
              <option key="4-line" value="M">M</option>
              <option key="5-line" value="N">N</option>
              <option key="6-line" value="Q">Q</option>
              <option key="1-line" value="R">R</option>
              <option key="2-line" value="S">S</option>
              <option key="3-line" value="W">W</option>
              <option key="4-line" value="Z">Z</option>
            </select>

            <select id="stopDropdown" value={this.state.line} onChange={this.updateLine()} >
              <option key="default-line" value="default" selected>STOPS</option> 
              {this.stopOptions}
            </select>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="body"
            />
            <input
              type="text"
              value={this.state.stop_id}
              onChange={this.update("stop_id")}
              placeholder="stop_id"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SpotForm;