/** @jsx React.DOM */
'use strict'
var React = require('react');

// Who am I?
// I represent matches for a single bom part

// Bootstrap components
var Panel        = require('react-bootstrap').Panel;
var Table        = require('react-bootstrap').Table;

// React components
var MatchedCell  = require('./MatchedCell');

// Actions
var MatchActions = require('../../actions/MatchActions');

module.exports = React.createClass({

    getInitialState: function() {
      return {
        bom_part_number: this.props.bom_part.bom_part_number,
        bom_part_id    : this.props.bom_part.bom_part_id,
        target_quantity: this.props.bom_part.target_quantity,
        target_price   : this.props.bom_part.target_price
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
      console.log(this.props.bom_part.distributors);
      var cells = this.props.bom_part.distributors.map(function(distributor, i){
        return(
          <MatchedCell distributor={distributor} bom_part_id={this.props.bom_part.bom_part_id} />
        );
      }, this);

      return (
        <div>
          {cells}
        </div>
      );
    }
})