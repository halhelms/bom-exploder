'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS

let BomPartsHeader = require('./bom-parts-header');
let BomPartDetail  = require('./bom-part-detail');

let TempStore      = require('../../../stores/TempStore');

let BomPartsIndex = React.createClass({
  propTypes: {
    
  },

  getInitialState() {
    return {
    };
  },

  componentWillMount() {
    this.setState({results: TempStore.getResults()});
  },

  getDefaultProps() {
    return {};
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    let bom_parts = Object.keys(this.state.results.bom_parts).map((key, i) => {
      return {
        part_number : key,
        manufacturer: this.state.results.bom_parts[key].manufacturer,
        target_price: this.state.results.bom_parts[key].target_price,
        quantity    : this.state.results.bom_parts[key].required_quantity
      };
    });

    let details = bom_parts.map( (part, i) => {
      return <BomPartDetail bom_part = {part} key={i} />
    });


    return (
      <div>
        <h5 className='text-center'>Your BOM Parts</h5>
        <BomPartsHeader />
        {details}
      </div>
    );
  }
})

module.exports = BomPartsIndex;