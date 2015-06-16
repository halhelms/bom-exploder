'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let Store = require('../../stores/Store');
// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS


let BomForm = React.createClass({
  path: 'boms/bom-add-edit-form',

  propTypes: {
    mode  : string,
    bom_id: number
  },

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    
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