'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// let Store                                          = require('../../stores/Store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS


let AllDistributorsTitle = React.createClass({
  path: 'results/matched-parts/all-distributors/title',

  propTypes: {
    distributor_name: string,
  },  

  getInitialState() {
    return {
    };
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
    who.call(this);
    return (
      <div className='h4 text-center'>
        Matching Results
      </div>
    );
  }
})

module.exports = AllDistributorsTitle;