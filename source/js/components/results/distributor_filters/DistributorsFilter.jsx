

// I am a panel that houses the checkboxes allowing users to show/hide various filter options for distributors

'use strict'
var React                = require('react');
// React components
var FilterByDistributors = require('/Users/halhelms/bom-exploder/components/distributor_filters/FilterByDistributors');
// Stores
var DistributorsStore    = require('/Users/halhelms/bom-exploder/stores/DistributorsStore');
// Bootstrap components
var Panel                = require('react-bootstrap').Panel;

// this component allows the buyer to select which distributors they wish to see results from
var DistributorsFilter = React.createClass({
  onDistributorsStoreChange() {

  },

  componentDidMount() {
    DistributorsStore.addChangeListener(this.onDistributorsStoreChange);
  },

  render() {
    return (
      <Panel className={this.displayName} header="Distributors">
        <FilterByDistributors />
      </Panel>
    );
  }
})

module.exports = DistributorsFilter;