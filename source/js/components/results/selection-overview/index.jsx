'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var SelectionOverviewIndex = React.createClass({

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
      return (
        <div>
          <h4>Your Selections</h4>
          <div>{this.state.percent_selected}% of your BOM parts have been selected</div>
          <div className='text-right'>Total target price: ${this.state.total_target_price.formatMoney(0)}</div>
          <div className='text-right'>Total selected price: ${this.state.total_selected_price.formatMoney(0)}</div>
          <div className='text-right'>Difference: ${(this.state.total_selected_price - this.state.total_target_price).formatMoney(0)}</div>
        </div>
      );
    }
})

module.exports = SelectionOverviewIndex;