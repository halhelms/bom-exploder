'use strict'
var React = require('react');
// React components
var BomList = require('./bom-list');
// Bootstrap components

var BomIndex = React.createClass({

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
          <BomList />
        </div>
      );
    }
})

module.exports = BomIndex;