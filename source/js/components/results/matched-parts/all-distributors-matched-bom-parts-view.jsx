'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
let TempStore = require('../../../stores/TempStore');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let AllDistributorsMatchedBomPartsView = React.createClass({
  propTypes: {
    bom_id: string,
  },  

  getInitialState() {
    return {
    };
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    this.setState({matching_results: TempStore.getMatchingResults()})
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {

    return (
      <div>
        All distributors, all parts
      </div>
    );
  }
})

module.exports = AllDistributorsMatchedBomPartsView;