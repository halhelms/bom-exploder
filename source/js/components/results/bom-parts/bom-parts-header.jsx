'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let BomPartsHeader = React.createClass({
  propTypes: {

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

    return (
      <div>
        <div className='bom-part-header-left inline'>
          Part No.<br />Mfgr.
        </div>
        <div className='bom-part-header-right inline'>
          Target Price<br />Qty.
        </div>
      </div>
    );
  }
})

module.exports = BomPartsHeader;