'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let SingleDistributorTitle = React.createClass({
  propTypes: {
    distributor_name: string.isRequired,
    bom_part_number: string.isRequired,
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

  remove() {
    console.log('Removing single distributor view');
  },

  render() {

    return (
      <div className='h4'>
        <div className='inline text-center'>{this.props.distributor_name} Matching Parts for BOM Part Number {this.props.bom_part_number}</div>
        <div className='inline text-right'><i className=' h5 fa fa-compress' onClick={this.remove}/></div>
      </div>
    );
  }
})

module.exports = SingleDistributorTitle;