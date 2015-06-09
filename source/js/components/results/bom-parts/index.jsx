'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS

var BomPartsHeader = require('./bom-parts-header');
var BomPartDetail  = require('./bom-part-detail');

var TempStore      = require('../../../stores/TempStore');

var BomPartsIndex = React.createClass({

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
      var bom_parts = Object.keys(this.state.results.bom_parts).map((key, i) => {
        return {
          part_number : key,
          manufacturer: this.state.results.bom_parts[key].manufacturer,
          target_price: this.state.results.bom_parts[key].target_price,
          quantity    : this.state.results.bom_parts[key].required_quantity
        };
      });

      var details = bom_parts.map( (part, i) => {
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