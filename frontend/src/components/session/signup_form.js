import React from 'react';
import { withRouter } from 'react-router-dom';
import "./sessions.css";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.signedIn === true) {
      this.props.history.push('/login');
    }
    // this.setState({errors: prevProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
      // password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
      <div className="signup-form-container">
          <form className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            <Link className="loginLink" to={'/login'}>LOGIN</Link>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            {/* <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              /> */}
            <br/>
            <input type="submit" value="SIGN UP" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
      <div className="backdrop-color">
        
      </div>
    </>
    );
  }
}

export default withRouter(SignupForm);