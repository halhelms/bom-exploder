'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// Bootstrap components

// Stores
// var ???Store = require('../../stores/???Store');

// Actions
// var ???Actions = require('../../actions/???Actions');

var ComponentName = React.createClass({
    mixins: [PureRenderMixin],

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {
        distributor_name: "Distributor Match",
        bom_part_id: 0
      };
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      return (
        <div className="distributor-header">
          {this.props.distributor_name}
        </div>
      );
    }
})

module.exports = ComponentName;