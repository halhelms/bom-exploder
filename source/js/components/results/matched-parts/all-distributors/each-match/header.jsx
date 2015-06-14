'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let MatchedPartsHeader = React.createClass({
  propTypes: {
    distributor_name: string,
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
      <div className='matched-part-header inline'>
        {this.props.distributor_name}
      </div>
    );
  }
})

module.exports = MatchedPartsHeader;