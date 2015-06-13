'use strict'
let React = require('react');

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let FilterDistributors = React.createClass({

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {};
  },

  componentDidMount() {

  },

  componentWillMount() {
    
  },

  componentDidUnmount() {

  },

  render() {
    return (
      <div className='checkbox'>
        <label>
          <input type="checkbox" /><span className='push-right-6'>Filter by Distributors</span>
        </label>
      </div>
    );
  }
})

module.exports = FilterDistributors;