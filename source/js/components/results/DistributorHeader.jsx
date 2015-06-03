

// I am a simple component that displays a distributor's name in the matrix section

'use strict'
var React = require('react');

var DistributorHeader = React.createClass({

    shouldComponentUpdate() {
      return false;
    },

    render() {
      return (
        <span>
          {this.props.name}
        </span>
      );
    }
})

module.exports = DistributorHeader;