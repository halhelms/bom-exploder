'use strict'
var React = require('react');
// React components
var Test = require('../matrix/Test');
// Bootstrap components
var Panel = require('react-bootstrap').Panel;

var TestPage = React.createClass({

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
        <Test />
      );
    }
})

module.exports = TestPage;