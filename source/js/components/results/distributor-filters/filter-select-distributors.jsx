'use strict'
let React             = require('react');

// STORES
// let Store          = require('../../stores/Store');
// ACTIONS
// let Actions        = require('../../actions/Actions');
// REACT COMPONENTS
let DistributorColumn = require('./distributor-column');
let TempStore         = require('../../../stores/TempStore');

let FilterSelectDistributors = React.createClass({
  path: 'results/distributor-filters/filter-select-distributors',

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {
      bundle_limit: 3
    };
  },

  componentWillMount() {
    this.setState({distributors: TempStore.getDistributors()});
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    let distributors = this.state.distributors.map((distributor, i) => {
      return (
        {
          name    : distributor.name,
          quantity: distributor.matched_quantity,
          checked : distributor.show,
          id      : distributor.id
        }
      );
    });

    let distributorBundles = [];
   
    let i, j, chunk = 3;
    for (i=0, j=distributors.length; i<j; i+=chunk) {
      distributorBundles.push(distributors.slice(i, i+chunk));
    }

    let checkboxes = distributorBundles.map( (set, i) => {
      return <div className='inline' key={i}><DistributorColumn distributors={set} /></div>
    });

    return (
      <div>
        {checkboxes}
      </div>
    );
  }
})

module.exports = FilterSelectDistributors;