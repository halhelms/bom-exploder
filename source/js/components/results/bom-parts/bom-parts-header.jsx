'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var BomPartsHeader = React.createClass({

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