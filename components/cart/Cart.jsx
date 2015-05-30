
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

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {};
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      return (
        <Panel header="My Selections">
        
        </Panel>
      );
    }
})