'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let Store                                          = require('../../stores/Store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS


let PriceBreak = React.createClass({
  path: 'results/matched-parts/single-distributor/price-break',

  propTypes: {
    price_break: object.isRequired,
  },  

  getInitialState() {
    return {
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
    let to_price = this.props.price_break.to === 1000000 ? "..." : this.props.price_break.to;
    return (
      <div>
        <div className='inline text-right width-90'>{this.props.price_break.from} - {to_price}</div> <div className='inline text-left'>{this.props.price_break.price}</div>
      </div>
    );
  }
})

module.exports = PriceBreak;