/** @jsx React.DOM */
'use strict'
var React = require('react');

// React components
var MatchedRow      = require('./MatchedRow');

// Bootstrap components
var Panel           = require('react-bootstrap').Panel;
var Table           = require('react-bootstrap').Table;

// Stores
var BOMMatcherStore = require('../../stores/BOMMatcherStore');

// Actions
var MatrixActions   = require('../../actions/MatrixActions');

module.exports = React.createClass({

    getInitialState: function() {
      return {
        matches: {}
      };
    },

    getDefaultProps: function() {
      return {bom_id: 0};
    },

    onStoreChange: function() {
      this.setState({matches: BOMMatcherStore.getMatches()});
    },

    componentWillMount: function() {
      console.log('componentWillMount');
      MatrixActions.getBOMMatches(this.props.bom_id);
    },

    componentDidMount: function() {
      BOMMatcherStore.addChangeListener(this.onStoreChange);
    },

    componentDidUnmount: function() {
      BOMMatcherStore.removeChangeListener(this.onStoreChange);
    },

    render: function(){
      if ( !isEmpty(this.state.matches) ) {
      var rows = this.state.matches.matches.map(function(row, i){
        return (
          <MatchedRow row={row} key={i}/>
        );
      })} else {
        <div />
      };

      return (
        <Panel header="Part Matches">
          <div>{rows}</div>
        </Panel>
      );
    }
})