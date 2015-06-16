'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let Store                                          = require('../../stores/Store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS


let BomPartDetail = React.createClass({
  path: 'results/bom-parts/bom-part-detail',

  propTypes: {
    bom_part: object,
  },

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
    // who.call(this);
    let selected = <img src="/source/assets/images/selected.png" height='21px' />

    return (
      <div>
        <div className='bom-part-left inline'>
          {this.props.bom_part.part_number}<br />{this.props.bom_part.manufacturer}
          <br />
          {selected}
        </div>
        <div className='bom-part-right inline text-right'>
          {this.props.bom_part.target_price}<br />{this.props.bom_part.quantity}
        </div>
      </div>
    );
  }
})

module.exports = BomPartDetail;