'use strict'
let React = require('react');

// STORES
// let Store = require('../../stores/Store');
// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS


let HideSelectedParts = React.createClass({

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
      <div className='checkbox'>
        <label>
          <input type="checkbox" /><span className='push-right-6'>Hide selected parts</span>
        </label>
      </div>
    );
  }
})

module.exports = HideSelectedParts;