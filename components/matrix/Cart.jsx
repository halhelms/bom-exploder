/** @jsx React.DOM */
'use strict'
var React = require('react');

// Bootstrap components
var Panel = require('react-bootstrap').Panel;
var Table = require('react-bootstrap').Table;

// Stores
var CartStore = require('../../stores/CartStore');

// Actions
var CartActions = require('../../actions/CartActions');

module.exports = React.createClass({

    getInitialState: function() {
      return {};
    },

    getDefaultProps: function() {
      return {};
    },

    componentDidMount: function() {

    },

    componentDidUnmount: function() {

    },

    render: function(){
      return (
        <Panel header="My Selections">
        
        </Panel>
      );
    }
})