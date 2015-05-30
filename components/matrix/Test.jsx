'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// Bootstrap components
var Panel = require('react-bootstrap').Panel;

// Stores
// var BOMStore = require('../../stores/BOMStore');

// Actions
// var Actions = require('../../actions/???Actions');

var Test = React.createClass({
    mixins: [PureRenderMixin],

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
        <div>
          Test Page
        </div>
      );
    }
})

module.exports = Test;