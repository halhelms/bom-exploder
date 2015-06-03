
// I hold the matching distributor parts for BOM parts

'use strict'
var React = require('react');

// React components
var MatchedRow          = require('./MatchedRow');
var DistributorHeader   = require('./DistributorHeader');
var DistributorMatch    = require('./DistributorMatch');
// Bootstrap components
var Panel               = require('react-bootstrap').Panel;
var Table               = require('react-bootstrap').Table;
// Stores
var BOMMatcherStore     = require('../../stores/BOMMatcherStore');
var BOMStore            = require('../../stores/BOMStore');
var DistributorsStore   = require('../../stores/DistributorsStore');
// Actions
var MatrixActions       = require('../../actions/MatrixActions');
var DistributorsActions = require('../../actions/DistributorsActions');

var MatchedTable = React.createClass({

  getInitialState() {
    return {
      matches: {},
      distributors: []
    };
  },

  getDefaultProps() {
    return {bom_id: 0};
  },

  onBOMStoreChange() {
    this.setState({distributors: BOMStore.getDistributorsForBOM()});
    this.setState({meta_info: this.state.matches.meta_info});
  },

  onBOMMatcherStoreChange() {
    this.setState({matches: BOMMatcherStore.getMatches()});
  },

  onDistributorsStoreChange() {
    
  },

  componentWillMount() {
    MatrixActions.getBOMMatches(this.props.bom_id);
  },

  componentDidMount() {
    BOMMatcherStore.addChangeListener(this.onBOMMatcherStoreChange);
    BOMStore.addChangeListener(this.onBOMStoreChange);
    DistributorsStore.addChangeListener(this.onDistributorsStoreChange);
    DistributorsActions.fetchDistributorsForBOM(this.props.bom_id);
  },

  componentDidUnmount() {
    BOMMatcherStore.removeChangeListener(this.onStoreChange);
  },

  render() {
    if (isEmpty(this.state.matches) || isEmpty(this.state.distributors)) {return false};

    var distributors = this.state.distributors.map(function(distributor, i) {
      return (
        <DistributorHeader name={distributor.distributor_name} key={i}/>
      );
    });

    var rows = this.state.matches.bom_parts.map(function(bom_part, i) {
      return (
        <MatchedRow bom_part = {bom_part} />
      );
    });

    return (
      <Panel header="Distributor Matches">
        {distributors}
        <br />
      </Panel>
    );
  }
});

module.exports = MatchedTable;