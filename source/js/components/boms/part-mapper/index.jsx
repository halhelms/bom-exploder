'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var PartMapperList = require('./part-mapper-list');

var PartMapper = React.createClass({
    mixins: [PureRenderMixin],

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {};
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      var bom_id = 1111;
      var bom_name = "iPhone 6 Charging Station";
      var bom_fields = [
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