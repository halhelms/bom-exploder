'use strict'
let React  = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

let {Router, Link} = require('react-router');
// STORES
// let Store = require('../../stores/Store');
// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS

let InboxIndex = React.createClass({
  path: 'inbox/list-item',

  propTypes: {
    item: object
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
      <div>
        <div className='inline width-210'>
          {this.props.item.author}
        </div>
        <div className='inline'>
          <i className='fa fa-trash-o margin-right-6' /><Link to="email" params={{id: this.props.item.id}}>{this.props.item.subject}</Link>
        </div>
      </div>
    );
  }
})

module.exports = InboxIndex;