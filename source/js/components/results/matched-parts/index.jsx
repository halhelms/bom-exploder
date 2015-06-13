'use strict'

// I am responsible for displaying the 'Matching Results' area. 

let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS

let MatchedPartsHeader     = require('./matched-parts-header');
let MatchedPartDetail      = require('./matched-part-detail');
let MatchedPartsColumn     = require('./matched-parts-column');
let SingleDistributorMatchedBomPartView = require('./single-distributor-matched-bom-part-view');
let AllDistributorsMatchedBomPartsView    = require('./all-distributors-matched-bom-parts-view');

let TempStore              = require('../../../stores/TempStore');

let MatchedPartsIndex = React.createClass({

  getInitialState() {
    return {
      percent_selected: 72,
      total_target_price: 131700,
      total_selected_price: 130650,
      all_results: true
    };
  },

  getDefaultProps() {
    return {
      quantity_displayed: 5,
    };
  },

  componentWillMount() {
    this.setState({results: TempStore.getResults()});
    this.setState({distributors: TempStore.getDistributors()});
  },

  componentDidMount() {
    TempStore.addChangeListener(this.onStoreChange) ;
  },

  componentDidUnmount() {

  },

  onStoreChange() {
    this.setState({results_mode: TempStore.getResultsMode()})
  },

  render() {
    // In normal results_mode (i.e. 'matching')
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
    let matching_view = Object.keys(match_columns).map((distributor_id, i) => {
      return (
        <MatchedPartsColumn distributor={match_columns[distributor_id]} key={i} />
      );
    })

    // Matching part details view
    let matched_part_details_view = <SingleDistributorMatchedBomPartView bom_id='100' distributor_id='1112' />;

    // Start by declaring a null view
    let view = null;
    // If we're in 'matching' results mode...
    if (this.state.all_results === true) {
      view = matching_view;
    } else {
        // we must be in Matching part details results_mode
      view = matched_part_details_view;
    }

    // In detail results_mode (i.e. 'matching part details')

    let title = this.state.results_mode === 'matching' ? "Matching Results" : "Matching Part Details";

    return (
      <div>
        <h5 className='text-center'>{title}</h5>
        <div>
          {matched_part_details_view}
        </div>
      </div>
    );
  }
})

module.exports = MatchedPartsIndex;