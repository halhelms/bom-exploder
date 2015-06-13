'use strict'
let React = require('react');

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
let BomAdd = require('./bom-add');

let BomNew = React.createClass({

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading text-center h1'>New Project Details</div>
        <BomAdd bom_id='0' mode='add' />
      </div>
    );
  }
})

module.exports = BomNew;