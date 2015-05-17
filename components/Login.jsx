/** @jsx React.DOM */
'use strict'
var React        = require('react');

var Router       = require('react-router'); // or var Router = ReactRouter; in browsers
var Link         = Router.Link;
var LoginActions = require('../actions/LoginActions');
var LoginStore   = require('../stores/LoginStore');

module.exports = React.createClass({
    displayName: 'Login',

    getInitialState: function() {
      return {
        username: '', 
        password: '',
        currentUser: {},
        halIq: 185
      };
    },

    handleCurrentUserUpdate:function() {
      this.setState({currentUser: LoginStore.getCurrentUser()});
    },

    componentDidMount: function() {
      LoginStore.addChangeListener(this.handleCurrentUserUpdate);
    },

    componentDidUnmount: function() {
      LoginStore.removeChangeListener(this.handleCurrentUserUpdate);
    },

    onChangeUserName: function(e) {
      this.setState( {username: e.target.value} );
    },

    onChangePassword: function(e) {
      this.setState( {password: e.target.value} );
    },

    handleLogin: function(event) {
      event.preventDefault();
      this.setState({username: '', password: ''} );
      LoginActions.attemptLogin(this.state);
    },

    render: function(){
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