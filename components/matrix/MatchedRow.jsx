/** @jsx React.DOM */

// I hold the cells for a results row based on a BOM part

'use strict'
var React = require('react');

// React components
var MatchedCell  = require('./MatchedCell');
// Bootstrap components
var Panel        = require('react-bootstrap').Panel;
var Table        = require('react-bootstrap').Table;
// Actions
var MatchActions = require('../../actions/MatchActions');

var MatchedRow = React.createClass({

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
});

module.exports = MatchedRow;