'use strict'

// I am responsible for displaying the 'Matching Results' area. 

let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
let TempStore                           = require('../../../stores/TempStore');
// ACTIONS
// let ???Actions                       = require('../../actions/???Actions');
// REACT COMPONENTS

let SingleDistributorMatchedBomPartView = require('./single-distributor/matched-bom-part-view');
let AllDistributorsMatchedBomPartsView  = require('./all-distributors/matched-bom-parts-view');

let SingleDistributorTitle              = require('./single-distributor/title');
let AllDistributorsTitle                = require('./all-distributors/title');

let MatchedPartsIndex = React.createClass({

  propTypes: {

  },

  getInitialState() {
    return {
      percent_selected: 0,
      total_target_price: 0,
      total_selected_price: 0,
      view_mode: {
        distributor_id: null,
        distributor_name: null,
        bom_part_number: null
      }
    };
  },

  getDefaultProps() {
    return {
    };
  },

  componentWillMount() {
    this.setState({percent_selected: TempStore.getPercentSelected()});
    this.setState({total_target_price: TempStore.getTotalTargetPrice()});
    this.setState({total_selected_price: TempStore.getTotalSelectedPrice()});
  },

  componentDidMount() {
    TempStore.addChangeListener(this.onTempStoreChange);
  },

  componentDidUnmount() {

  },

  onTempStoreChange(args) {
    console.log('args from onTempStoreChange in results/index.jsx', args)
    this[args.action_data.subsequent_action](args);

  },

  SET_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_DONE(args) {
    console.log( 'SET_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_DONE within index')
  },

  render() {

    // Start by declaring a null view and title
    let view = null;
    let title = null;

    // If we're in 'all distributors'  mode...
    if (!this.state.view_mode.single_distributor_id) {
      view  = <AllDistributorsMatchedBomPartsView />;
      title = <AllDistributorsTitle />
    
    } else {
        // we must be in 'single distributor' view
      view = <SingleDistributorMatchedBomPartView 
        bom_part_id={this.state.view_mode.bom_part_id} 
        distributor_name={this.state.view_mode.distributor_name} />
      title = <SingleDistributorTitle 
        distributor_name={this.state.view_mode.distributor_name} 
        bom_part_number={this.state.view_mode.bom_part_number} />
    }

    return (
      <div>
        <h5 className='text-center'>{title}</h5>
        <div>
          {view}
        </div>
      </div>
    );
  }
})

module.exports = MatchedPartsIndex;