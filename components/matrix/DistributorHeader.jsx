/** @jsx React.DOM */
'use strict'
var React = require('react');

module.exports = React.createClass({

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