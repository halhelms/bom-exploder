/** @jsx React.DOM */
'use strict'
var React = require('react');

// Bootstrap components
var Panel        = require('react-bootstrap').Panel;
var Table        = require('react-bootstrap').Table;

// React components
var MatchedCell  = require('./MatchedCell');

// Actions
var MatchActions = require('../../actions/MatchActions');

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
      var cells = this.props.row.matching_parts.map(function(cell, i){
        return(
          <MatchedCell key={i} cell={cell} />
        );
      });
      return (
        <div>
          {cells}
        </div>
      );
    }
})