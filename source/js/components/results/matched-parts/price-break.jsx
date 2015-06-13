'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let PriceBreak = React.createClass({
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

    return (
      <div>
        {this.props.price_break.from} - {this.props.price_break.to} : {this.props.price_break.price}
      </div>
    );
  }
})

module.exports = PriceBreak;