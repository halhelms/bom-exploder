/** @jsx React.DOM */
'use strict'
var React = require('react');

// Who am I?
// I receive a distributor. From there, I have to present a the shown part
// and have the ability to let someone drill down for other parts

// Bootstrap components
var Panel = require('react-bootstrap').Panel;
var Table = require('react-bootstrap').Table;

// Stores


// Actions
var MatchActions = require('../../actions/MatchActions');

module.exports = React.createClass({

    getInitialState: function() {
      return {
        distributor_name: this.props.distributor.distributor,
        matched_parts   : this.props.distributor.matched_parts,
        shown_part      : this.props.distributor.matched_parts[0],
        bom_part_id     : this.props.bom_part_id
      };
    },

    getDefaultProps: function() {
      return {};
    },

    componentDidMount: function() {

    },

    componentDidUnmount: function() {

    },

    render: function(){
      if (isEmpty(this.state.shown_part) ){return false};

      return (
        <div>
          {this.state.shown_part.price_per_part}
          <br />
          {this.state.shown_part.qoh}
          <br />
          {this.state.shown_part.moq}
        </div>
      );
    }
})