/** @jsx React.DOM */

// I am a simple component that displays a distributor's name in the matrix section

'use strict'
var React = require('react');

var DistributorHeader = React.createClass({

    shouldComponentUpdate: function() {
      return false;
    },

    render: function(){
      return (
        <span>
          {this.props.name}
        </span>
      );
    }
})

module.exports = DistributorHeader;