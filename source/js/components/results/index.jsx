'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var BOMStore        = require('/Users/halhelms/bom-exploder/stores/BOMStore');
// var BOMMatcherStore = require('/Users/halhelms/bom-exploder/stores/BOMMatcherStore');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
// var DistributorsFilter = require('/Users/halhelms/bom-exploder/components/distributor_filters/DistributorsFilter');

var Results = React.createClass({
    mixins: [PureRenderMixin],

    contextTypes: {
      router: React.PropTypes.func
    },

    getInitialState() {
      return (
        {
          bom_id: this.context.router.getCurrentParams().bom_id,
          bom_name: "not provided"
        }
      );
    },

    getDefaultProps() {
      return {};
    },

    componentDidMount() {
      // BOMMatcherStore.
      // this.setState({bom_name: BOMStore.getBOMName(this.state.bom_id)});
    },

    componentDidUnmount() {

    },

    render() {
      return (
        <div>
          Results: {this.state.bom_name}
        </div>
      );
    }
})

module.exports = Results;