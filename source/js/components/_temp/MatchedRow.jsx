

// I hold the cells for a results row based on a BOM part

'use strict'
var React = require('react');

// React components
var MatchedCell  = require('./MatchedCell');
// Bootstrap components

// Actions
var MatchActions = require('../../actions/MatchActions');

var MatchedRow = React.createClass({

  getInitialState() {
    return {
      bom_part_number: this.props.bom_part.bom_part_number,
      bom_part_id    : this.props.bom_part.bom_part_id,
      target_quantity: this.props.bom_part.target_quantity,
      target_price   : this.props.bom_part.target_price
    };
  },

  render() {

    var cells = this.props.bom_part.distributors.map(function(distributor, i){
      return(
        <MatchedCell distributor={distributor} bom_part_id={this.props.bom_part.bom_part_id} key={i} />
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