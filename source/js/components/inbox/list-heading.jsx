'use strict'
let React = require('react');

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS

let ListHeading = React.createClass({

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
      <div>
        <div className='inline h4 width-210'>
          Author
        </div>
        <div className='inline h4'>
          Subject
        </div>
      </div>
    );
  }
})

module.exports = ListHeading;