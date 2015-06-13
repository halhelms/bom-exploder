'use strict'
let React = require('react');

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let SelectionOverviewIndex = React.createClass({

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

  componentWillMount() {

  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    let price_difference = 'green';
    if (this.state.total_selected_price > this.state.total_target_price) {
      price_difference = 'red';
    } 
  

    return (
      <div>
        <h4>Your Selections</h4>
        <div>{this.state.percent_selected}% of your BOM parts have been selected</div>
        <div className='text-right '>Total target price: ${this.state.total_target_price.formatMoney(0)}</div>
        <div className='text-right'>Total selected price: ${this.state.total_selected_price.formatMoney(0)}</div>
        <div className='text-right' style={{color: price_difference}}>Difference: ${(this.state.total_selected_price - this.state.total_target_price).formatMoney(0)}</div>
        <div className='text-left'><i data-ot="View matching results you have selected" data-ot-delay='0.2' data-ot-style="dark" className='glyphicon glyphicon-shopping-cart margin-right-2' /> View Selections</div>
      </div>
    );
  }
})

module.exports = SelectionOverviewIndex;