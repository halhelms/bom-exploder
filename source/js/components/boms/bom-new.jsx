'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var BomAdd = require('./bom-add');

var BomNew = React.createClass({
    mixins: [PureRenderMixin],

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {};
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      return (
        <div className='panel panel-primary'>
          <div className='panel-heading text-center h1'>New Project Details</div>
          <BomAdd bom_id='0' mode='add' />
        </div>
      );
    }
})

module.exports = BomNew;