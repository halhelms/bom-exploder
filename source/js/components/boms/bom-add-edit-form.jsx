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


var BomForm = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
      mode  : React.PropTypes.string,
      bom_id: React.PropTypes.number
    },

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
        <form>
          <div className='form-group'>
            <label for='project-name'>Project Name</label>
            <input type='text' className='form-control' id='project-name' placeholder='Project name'>
          </div>
        </form>
      );
    }
})

module.exports = BomForm;