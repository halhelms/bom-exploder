'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
let TempStore = require('../../../../stores/TempStore');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
let MatchedPartsHeader                  = require('./each-match/header');
let MatchedPartDetail                   = require('./each-match/detail');
let MatchedPartsColumn                  = require('./each-match/column');

let MatchedBomPartsView = React.createClass({
  propTypes: {
  
  },  

  getInitialState() {
    return {
      results: null,
      matching_results: null,
      distributors: null,
    };
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    this.setState({results: TempStore.getResults()});
    this.setState({distributors: TempStore.getDistributors()});
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    // This is going to get a little complicated...
    let match_columns = {};
    // Create match_columns with each key the id of a distributor whose value is an object
    // with two keys, 'name' and 'bom_parts'
    this.state.distributors.forEach((distributor, i) => {
      Object.keys(this.state.results.bom_parts).forEach((bom_part_number, j) => {
        match_columns[distributor.id] = {
          name: distributor.name,
          id: distributor.id,
          matched_parts: {}
        }
      })
    });

    // Now loop over the bom_parts in this.state.results
    // Attach the 'best_match' to the appropriate distributor's appropriate bom_parts key
    Object.keys(this.state.results.bom_parts).forEach((bom_part_number, i) => {
      Object.keys(this.state.results.bom_parts[bom_part_number].distributors).forEach((distributor_id, j) => {
        match_columns[distributor_id].matched_parts[bom_part_number] = this.state.results.bom_parts[bom_part_number].distributors[distributor_id].best_match;
      });
    });

    // Normal 'matching' results_mode view
    let view = Object.keys(match_columns).map((distributor_id, i) => {
      return (
        <MatchedPartsColumn distributor={match_columns[distributor_id]} key={i} />
      );
    })
    return (
      <div>
        {view}
      </div>
    );
  }
})

module.exports = MatchedBomPartsView;