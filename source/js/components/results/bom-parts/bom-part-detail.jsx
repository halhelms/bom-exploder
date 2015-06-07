'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var BomPartDetail = React.createClass({

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
          <div className='bom-part-left inline'>
            {this.props.bom_part.part_number}<br />{this.props.bom_part.manufacturer}
          </div>
          <div className='bom-part-right inline text-right'>
            {this.props.bom_part.target_price}<br />{this.props.bom_part.quantity}
          </div>
        </div>
      );
    }
})

module.exports = BomPartDetail;