import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import components
import Alert from '../../components/Alert';

// import styles
// import './Signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMsg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      return this.props.history.push('/profile');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loggedIn) {
      nextProps.history.push('/profile');
      return false;
    }
    return true;
  }

  loggedIn() {
    document.getElementById("logInId").style.display = "none";
    document.getElementById("signUpId").style.display = "none";
    document.getElementById("logoutId").style.display = "contents";
    document.getElementById("logoutId").style.marginTop = "1.25rem";
    document.getElementById("logoutId").style.fontSize = "1.5rem";
    document.getElementById("logoutId").style.fontWeight = "400";
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    Accounts.createUser({ email, password }, err => {
      if (err) {
        this.setState({ errMsg: err.reason });
        return console.log(err);
      }
    });
  }

  render() {
    if (this.props.loggedIn) {
      return null;
    }

    const { errMsg } = this.state;
    return (
      <section className="signup-page signup-spacing">
        <div className="card mx-auto signup-spacing" style={{ maxWidth: '28rem' }}>
          <div className="card-header signup-spacing">
            {/* <div className="brand">
              <div className="text-center">
                <img
                  className="rounded-circle"
                  src="../../components/Alert"
                  alt="logo"
                />
              </div>
            </div> */}
            <div className="card-body signup-spacing">
              <h4 className="card-title">Sign up</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">E-Mail Address</label>

                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" name="aggree" value="1" required /> I
                    agree to the Terms and Conditions
                  </label>
                </div>
                <div className="form-group no-margin">
                  {/* <button
                    type="submit"
                    className="btn btn-primary btn-block mb-2"
                  >
                    Sign up
                  </button> */}
                  <NavLink to="/profile">
                    <button className="btn btn-primary btn-block mb-2" onClick={this.loggedIn}>
                      Sign up
                    </button>
                  </NavLink>
                  {errMsg && <Alert errMsg={errMsg} />}
                </div>
                <div className="margin-top20">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </div>
              </form>
            </div>
          </div>
          <div className="footer text-center">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </section>
    );
  }
}

Signup.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Signup;
