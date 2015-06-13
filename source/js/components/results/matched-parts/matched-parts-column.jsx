'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
let MatchedPartsHeader = require('./matched-parts-header');
let MatchedPartDetail  = require('./matched-part-detail');

let MatchedPartsColumn = React.createClass({

  propTypes: {
    distributor: object.isRequired,
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

    let matched_results = Object.keys(this.props.distributor.matched_parts).map((bom_part_id, i) => {
      return (
        <MatchedPartDetail matched_part={this.props.distributor.matched_parts[bom_part_id]} key={i} />
      );
    });
    return (
      <div className='inline'>
        <MatchedPartsHeader className='bom-part-header-left inline' distributor_name={this.props.distributor.name} />  
        <br />
        {matched_results}
      </div>
    );
  }
})

module.exports = MatchedPartsColumn;