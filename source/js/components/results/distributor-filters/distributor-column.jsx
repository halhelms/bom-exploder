'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
// var Store                                          = require('../../stores/Store');
// ACTIONS
// var Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS


let DistributorColumn = React.createClass({
  path: 'results/distributor-filters/distributor-column',

  propTypes: {
    distributors: array
  },  

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {
    };
  },

  componentWillMount() {
    
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    let checkboxes = this.props.distributors.map( (distributor, i) => {
      return (<div key={i} className='with-padding-6'><input type='checkbox' /><span className='push-right-6'>{distributor.name}</span></div>);
    });
    return (
      <div>
        {checkboxes}
      </div>
    );
  }
});

module.exports = DistributorColumn;