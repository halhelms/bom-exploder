'use strict'
let React = require('react');

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
let PartMapperList = require('./part-mapper-list');

let PartMapper = React.createClass({

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
    let bom_id = 1111;
    let bom_name = "iPhone 6 Charging Station";
    let bom_fields = [
      "Quantity",
      "Part Number",
      "Description",
      "SKU",
      "Manufacturer",
      "Target Price"
    ];
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading text-center h1'>BOM Part Mapping</div>
        <div className='panel-body text-center h4'>{bom_name}</div>
        <div className='panel-body text-center h5'>Map your Excel columns to ours</div>
        
        <PartMapperList bom_id={bom_id} bom_name={bom_name} bom_fields={bom_fields}/>
        <br />
      </div>
    );
  }
})

module.exports = PartMapper;