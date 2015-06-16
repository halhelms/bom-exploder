
'use strict'
var React          = require('react');
let {Router, Link} = require('react-router');
var LoginActions   = require('../actions/LoginActions');
var LoginStore     = require('../stores/LoginStore');

module.exports = React.createClass({
    path: 'Login',

    getInitialState() {
      return {
        username: '', 
        password: '',
        currentUser: {},
        halIq: 185
      };
    },

    handleCurrentUserUpdate() {
      this.setState({currentUser: LoginStore.getCurrentUser()});
    },

    componentDidMount() {
      LoginStore.addChangeListener(this.handleCurrentUserUpdate);
    },

    componentDidUnmount() {
      LoginStore.removeChangeListener(this.handleCurrentUserUpdate);
    },

    onChangeUserName(e) {
      this.setState( {username: e.target.value} );
    },

    onChangePassword(e) {
      this.setState( {password: e.target.value} );
    },

    handleLogin(event) {
      event.preventDefault();
      this.setState({username: '', password: ''} );
      LoginActions.attemptLogin(this.state);
    },

    render() {
      return (
        <form onSubmit={this.handleLogin}>
          <label>Username:</label>
          <input value={this.state.username} onChange={this.onChangeUserName} id="username" />
          <br />
          <label>Password:</label>
          <input value={this.state.password} onChange={this.onChangePassword} id="password" type="password"/>
          <br />
          <button>Log In</button>
        </form>
      );
    }
})