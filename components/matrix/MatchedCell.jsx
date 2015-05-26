/** @jsx React.DOM */

// I receive a distributor. From there, I have to present a the shown part
// and have the ability to let someone drill down for other parts

'use strict'
var React = require('react');
// React components
var MatchActions = require('../../actions/MatchActions');
// Bootstrap components

// Stores
var DistributorsStore = require('../../stores/DistributorsStore');
// Actions

var MatchedCell = React.createClass({

    getInitialState: function() {
      return {
        distributor_id  : this.props.distributor.distributor_id,
        distributor_name: this.props.distributor.distributor,
        matched_parts   : this.props.distributor.matched_parts,
        shown_part      : this.props.distributor.matched_parts[0],
        bom_part_id     : this.props.bom_part_id,
        show            : true
      };
    },

    getDefaultProps: function() {
      return {};
    },

    onDistributorsStoreChange: function() {
      var distributor = DistributorsStore.getDistributor(this.state.distributor_id);
      if (distributor.show) {
        this.setState({show: true});
      } else {
        this.setState({show: false});
      }
    },

    componentDidMount: function() {
      DistributorsStore.addChangeListener(this.onDistributorsStoreChange);
    },

    componentDidUnmount: function() {
      DistributorsStore.removeChangeListener(this.onDistributorsStoreChange);
    },

    render: function(){
      if (isEmpty(this.state.shown_part) || !this.state.show) {return false};

      return (
        <div>
          {this.state.shown_part.price_per_part}
          <br />
          {this.state.shown_part.qoh}
          <br />
          {this.state.shown_part.moq}
        </div>
      );
    }
});

module.imports = MatchedCell;