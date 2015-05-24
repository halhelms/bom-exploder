/** @jsx React.DOM */
'use strict'
var React         = require('react');

var Panel         = require('react-bootstrap').Panel;

var FilterByDistributors = require('./FilterByDistributors');

// this component allows the buyer to select which distributors they wish to see results from
module.exports = React.createClass({

  componentDidMount: function() {
    // console.log(this.props.bom_id);
  },

  render: function() {
    return (
      <Panel className={this.displayName} header="Distributors">
        <FilterByDistributors bom_id={this.props.bom_id} />
      </Panel>
    );
  }
})