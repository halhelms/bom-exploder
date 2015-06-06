'use strict'
var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var FilterAll = React.createClass({

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
        <div className='checkbox'>
          <label>
            <input type="checkbox" /><span className='push-right-6'>All</span>
          </label>
        </div>
      );
    }
})

module.exports = FilterAll;