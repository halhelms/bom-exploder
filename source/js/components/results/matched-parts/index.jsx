'use strict'

// I am responsible for displaying the 'Matching Results' area. 

var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var MatchedPartsHeader = require('./matched-parts-header');
var MatchedPartDetail  = require('./matched-part-detail');
var MatchedPartsColumn  = require('./matched-parts-column');

var TempStore          = require('../../../stores/TempStore');

var MatchedPartsIndex = React.createClass({

    getInitialState() {
      return {
        percent_selected: 72,
        total_target_price: 131700,
        total_selected_price: 130650
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

    },

    componentDidUnmount() {

    },

    render() {
      // This is going to get a little complicated...
      var match_columns = {};
      // Create match_columns with each key the id of a distributor whose value is an object
      // with two keys, 'name' and 'bom_parts'
      this.state.distributors.forEach((distributor, i) => {
        Object.keys(this.state.results.bom_parts).forEach((bom_part_number, j) => {
          match_columns[distributor.id] = {
            name: distributor.name,
            id: distributor.id,
            bom_parts: {}
          }
        })
      });

      // Now loop over the bom_parts in this.state.results
      // Attach the 'best_match' to the appropriate distributor's appropriate bom_parts key
      Object.keys(this.state.results.bom_parts).forEach((bom_part_number, i) => {
        Object.keys(this.state.results.bom_parts[bom_part_number].distributors).forEach((distributor_id, j) => {
          match_columns[distributor_id].bom_parts[bom_part_number] = this.state.results.bom_parts[bom_part_number].distributors[distributor_id].best_match
        });
      });

      var columns = Object.keys(match_columns).map((distributor_id, i) => {
        return (
          <MatchedPartsColumn distributor={match_columns[distributor_id]} key={i} />
        );
      })

      console.log(match_columns);
      return (
        <div>
          <h5 className='text-center'>Matching Results</h5>
          <div>
            {columns}
          </div>
        </div>
      );
    }
})

module.exports = MatchedPartsIndex;