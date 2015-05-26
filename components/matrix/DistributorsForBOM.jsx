/** @jsx React.DOM */

// I am a panel that houses the checkboxes allowing users to show/hide various filter options for distributors

'use strict'
var React         = require('react');
// React components
var FilterByDistributors = require('./FilterByDistributors');
// Stores
var DistributorsStore = require('../../stores/DistributorsStore');
// Bootstrap components
var Panel         = require('react-bootstrap').Panel;

// this component allows the buyer to select which distributors they wish to see results from
var DistributorsForBOM = React.createClass({
  onDistributorsStoreChange: function() {

  },

  componentDidMount: function() {
    DistributorsStore.addChangeListener(this.onDistributorsStoreChange);
  },

  render: function() {
    return (
      <Panel className={this.displayName} header="Distributors">
        <FilterByDistributors bom_id={this.props.bom_id} />
      </Panel>
    );
  }
})

module.exports = DistributorsForBOM;