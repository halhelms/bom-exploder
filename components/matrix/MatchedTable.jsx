/** @jsx React.DOM */
'use strict'
var React = require('react');

// React components
var MatchedRow        = require('./MatchedRow');
var DistributorHeader = require('./DistributorHeader');

// Bootstrap components
var Panel           = require('react-bootstrap').Panel;
var Table           = require('react-bootstrap').Table;

// Stores
var BOMMatcherStore = require('../../stores/BOMMatcherStore');
var BOMStore        = require('../../stores/BOMStore');

// Actions
var MatrixActions   = require('../../actions/MatrixActions');

module.exports = React.createClass({

    getInitialState: function() {
      return {
        matches: {},
        distributors: []
      };
    },

    getDefaultProps: function() {
      return {bom_id: 0};
    },

    onStoreChange: function() {
      this.setState({distributors: BOMStore.getDistributorsForBOM()});
      this.setState({matches: BOMMatcherStore.getMatches()});
      this.setState({meta_info: this.state.matches.meta_info});
    },

    componentWillMount: function() {
      console.log('componentWillMount');
      MatrixActions.getBOMMatches(this.props.bom_id);
    },

    componentDidMount: function() {
      BOMMatcherStore.addChangeListener(this.onStoreChange);
      BOMStore.addChangeListener(this.onStoreChange);
      MatrixActions.getDistributorsForBOM(this.props.bom_id);
    },

    componentDidUnmount: function() {
      BOMMatcherStore.removeChangeListener(this.onStoreChange);
    },

    render: function(){
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
          {rows}
        </Panel>
      );
    }
})