'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let Store                                          = require('../../stores/Store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS


let PartSearcher = React.createClass({
  path: 'header/part-searcher',

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
        <input type='text' className='form-control' id='part-searcher' placeholder='Search for Part Number' />
      </div>
    );
  }
})

module.exports = PartSearcher;