'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
let assign                  = require('../../../../node_modules/object-assign');


let {Router, Link}                                    = require('react-router');
// STORES
// let Store                                          = require('../../stores/Store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS
let TempStore                                         = require('../../stores/TempStore');

let Reply = React.createClass({
  path: 'inbox/reply',

  propTypes: {
  },

  getInitialState() {
    return {
      reply_message: null,
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

  submitForm(e) {
    e.preventDefault();
    this.props.onSubmitForm({replyMessage: React.findDOMNode(this.refs.replyMessage).value});
  },

  render() {
    who.call(this);
    return (
      <div>
        <form className='form-group'>
          <label htmlFor='replyInput'>Your reply</label>
          <input type="text" className='form-control' ref='replyMessage' id='replyInput' placeholder='Write your reply...' />
          <br />
          <input type='submit' className='button button-default' onClick={this.submitForm}>Reply</input>
        </form>
      </div>
    );
  }
})

module.exports = Reply;