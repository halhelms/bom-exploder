/** @jsx React.DOM */
'use strict'
var React = require('react');

// Bootstrap components
var Panel = require('react-bootstrap').Panel;
var Table = require('react-bootstrap').Table;

// Stores


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
      console.log(this.props.cell);
      var cell = this.props.cell.matched_parts.map(function(el, i){
        return (
          <div>
            {el.description}
          </div>
        );
      });
      return (
        <div>
          {cell}
        </div>
      );
    }
})