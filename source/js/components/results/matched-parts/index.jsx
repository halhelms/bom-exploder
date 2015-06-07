'use strict'
var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var MatchedPartsHeader = require('./matched-parts-header');
var MatchedPartDetail = require('./matched-part-detail');

var MatchedPartsIndex = React.createClass({

    getInitialState() {
      return {
        percent_selected: 72,
        total_target_price: 131700,
        total_selected_price: 130650
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
     var matchedParts = [
        {part_number: '11401', manufacturer: 'Illinois Capacitor', price: 1.07, qoh: 4800, moq: 100},
        {part_number: 'A2071R-N', manufacturer: 'AMD', price: 1.07, qoh: 4800, moq: 10},
        {part_number: 'M207YD', manufacturer: 'TI', price: .49, qoh: 10000, moq: 1},
        {part_number: 'X-2039', manufacturer: 'Farragon', tprice: .12, qoh: 7200, moq: 10},
        {part_number: '24930', manufacturer: 'Intel', price: 3.64, qoh: 5150, moq: 50},
        {part_number: '72-AM0', manufacturer: 'AMD', price: .84, qoh: 1200, moq: 100},
        {part_number: 'L1-148', manufacturer: 'Illinois Capacitor', price: 1.67, qoh: 6475, moq: 25},
        {part_number: 'TX25684', manufacturer: 'AMD', price: 2.18, qoh: 8100, moq: 1},
      ];

      var details = matchedParts.map( (part, i) => {
        return <MatchedPartDetail matched_part = {part} key={i} />
      });

      return (
        <div>
          <h5>Matched Parts</h5>
          <MatchedPartsHeader />
          {details}
        </div>
      );
    }
})

module.exports = MatchedPartsIndex;