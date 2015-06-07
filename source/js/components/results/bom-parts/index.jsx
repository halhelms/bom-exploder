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
var BomPartDetail = require('./bom-part-detail');

var BomPartsIndex = React.createClass({

    getInitialState() {
      return {
      };
    },

    getDefaultProps() {
      return {};
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      var bomParts = [
        {part_number: '11401', manufacturer: 'Illinois Capacitor', target_price: 1.07, quantity: 4800},
        {part_number: 'A2071R-N', manufacturer: 'AMD', target_price: 1.07, quantity: 4800},
        {part_number: 'M207YD', manufacturer: 'TI', target_price: .49, quantity: 10000},
        {part_number: 'X-2039', manufacturer: 'Farragon', target_price: .12, quantity: 7200},
        {part_number: '24930', manufacturer: 'Intel', target_price: 3.64, quantity: 5150},
        {part_number: '72-AM0', manufacturer: 'AMD', target_price: .84, quantity: 1200},
        {part_number: 'L1-148', manufacturer: 'Illinois Capacitor', target_price: 1.67, quantity: 6475},
        {part_number: 'TX25684', manufacturer: 'AMD', target_price: 2.18, quantity: 8100},
      ];

      var details = bomParts.map( (part, i) => {
        return <BomPartDetail bom_part = {part} key={i} />
      });

      return (
        <div>
          <h5>Your BOM Parts</h5>
          <BomPartsHeader />
          {details}
        </div>
      );
    }
})

module.exports = BomPartsIndex;