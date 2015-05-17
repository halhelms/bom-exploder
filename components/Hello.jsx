/** @jsx React.DOM */
'use strict'
var React = require('react');
var LoginStore = require('../stores/LoginStore');

module.exports = React.createClass({
    displayName: 'HelloReact',

    getInitialState: function() {
      return {currentUser: LoginStore.getCurrentUser()};
    },

    onLoginStoreChange: function() {
      this.setState({currentUser: LoginStore.getCurrentUser()});
    },

    componentDidMount: function() {
      LoginStore.addChangeListener(this.onLoginStoreChange);
    },

    componentDidUnmount: function() {
      LoginStore.removeChangeListener(this.onLoginStoreChange);
    },

    render: function(){
        return <div>Hello There, {this.state.currentUser.firstName}</div>
    }
})