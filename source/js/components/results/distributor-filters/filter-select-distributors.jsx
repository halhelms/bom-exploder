'use strict'
var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var DistributorColumn = require('./distributor-column');

var FilterSelectDistributors = React.createClass({

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {
        bundle_limit: 3
      };
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      var distributors = [
        {name: 'Allied', quantity: 54, checked: true},
        {name: 'Arrow', quantity: 23, checked: true},
        {name: 'AvNet', quantity: 36, checked: true},
        {name: 'Digi-Key', quantity: 19, checked: true},
        {name: 'element', quantity: 31, checked: true},
        {name: 'Farnell', quantity: 42, checked: true},
        {name: 'Future', quantity: 17, checked: true},
        {name: 'Grainger', quantity: 13, checked: true},
        {name: 'Heilind', quantity: 51, checked: true},
        {name: 'Master', quantity: 43, checked: true},
        {name: 'Mouser', quantity: 61, checked: true},
        {name: 'Newark', quantity: 57, checked: true},
        {name: 'PEI Genesis', quantity: 18, checked: true},
        {name: 'Powell', quantity: 12, checked: true},
        {name: 'RS Components', quantity: 9, checked: true},
        {name: 'Rutronik', quantity: 16, checked: true},
        {name: 'Sager', quantity: 34, checked: true},
        {name: 'TTI', quantity: 22, checked: true},
        {name: 'Verical', quantity: 6, checked: true},
        {name: 'Zoro', quantity: 19, checked: true}
      ];


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