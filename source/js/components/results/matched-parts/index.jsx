'use strict'

// I am responsible for displaying the 'Matching Results' area. 

let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
let TempStore                                         = require('../../../stores/TempStore');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS

let SingleDistributorMatchedBomPartView               = require('./single-distributor/matched-bom-part-view');
let AllDistributorsMatchedBomPartsView                = require('./all-distributors/matched-bom-parts-view');

let SingleDistributorTitle                            = require('./single-distributor/title');
let AllDistributorsTitle                              = require('./all-distributors/title');

let MatchedPartsIndex = React.createClass({
  path: 'results/matched-parts/index',

  propTypes: {

  },

  getInitialState(args) {
    return {
      percent_selected: 0,
      total_target_price: 0,
      total_selected_price: 0,
      all_distributor_mode: true,
      single_distributor_id: null,
      single_distributor_name: null,
      bom_part_number: null
    };
  },

  getDefaultProps(args) {
    return {
    };
  },

  componentWillMount(args) {
    this.setState({percent_selected: TempStore.getPercentSelected()});
    this.setState({total_target_price: TempStore.getTotalTargetPrice()});
    this.setState({total_selected_price: TempStore.getTotalSelectedPrice()});
  },

  componentDidMount(args) {
    TempStore.addChangeListener(this.onTempStoreChange);
  },

  componentWillUpdate: function(nextProps, nextState) {
  },

  componentDidUnmount(args) {
  },

  onTempStoreChange(args) {
    this[args.action_data.subsequent_action](args);
  },

  // functions in ALL_CAPS correspond to anticipated subsequent_action received from
  // store change listeners
  SET_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_DONE(args) {
    this.setState({single_distributor_name: args.action_data.distributor_name});
    this.setState({bom_part_number: args.action_data.bom_part_number});
    this.setState({all_distributor_mode: false});
  },

  EXIT_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_MODE_DONE(args) {
    this.setState({all_distributor_mode: true});
  },

  render() {
    who.call(this);
    // Start by declaring a null view and title
    let view = null;
    let title = null;

    // If we're in 'all distributors'  mode...
    // maybe refactor to switch statement
    if (this.state.all_distributor_mode) {
      view  = <AllDistributorsMatchedBomPartsView />;
      title = <AllDistributorsTitle />;
    
    } else {
      // we must be in 'single distributor' view
      // when the appropriate store is notified that we're switching to a single distributor,
      // it should already have the info available to it so there's no need to hold that
      // info here
      view = <SingleDistributorMatchedBomPartView />;
      title = <SingleDistributorTitle 
        distributor_name={this.state.single_distributor_name} 
        bom_part_number={this.state.bom_part_number} />;
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