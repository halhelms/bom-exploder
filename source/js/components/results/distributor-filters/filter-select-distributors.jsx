'use strict'
var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var DistributorColumn = require('./distributor-column');
var TempStore      = require('../../../stores/TempStore');

var FilterSelectDistributors = React.createClass({

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
      var distributors = this.state.distributors.map((distributor, i) => {
        return (
          {
            name    : distributor.name,
            quantity: distributor.matched_quantity,
            checked : distributor.show,
            id      : distributor.id
          }
        );
      });

      var distributorBundles = [];
     
      var i, j, chunk = 3;
      for (i=0, j=distributors.length; i<j; i+=chunk) {
        distributorBundles.push(distributors.slice(i, i+chunk));
      }

      var checkboxes = distributorBundles.map( (set, i) => {
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