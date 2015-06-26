'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

let {Router, Link}                                    = require('react-router');
// STORES
// let Store                                          = require('../../stores/Store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS
let TempStore                                         = require('../../stores/TempStore');
let Reply                                             = require('./Reply');

let Email = React.createClass({
  path: 'inbox/email-view',

  propTypes: {
    params: object
  },

  getInitialState() {
    return ({
      with_reply: false,
    });
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    this.setState({email_item: TempStore.getEmailItem(this.props.params.id)});
  },

  componentDidMount() {

  },

  componentDidUnmount() {
  
  },

  reply() {
    this.setState({with_reply: true});
  },

  submitReply(args) {
    console.log('args: ', args)
    console.log('Reply: ', args.replyMessage);
    this.setState({with_reply: false});
  },

  render() {
    who.call(this);
    let reply = this.state.with_reply ? <Reply onSubmitForm = {this.submitReply} ref='reply' /> : "";

    return (
      <div>
        <div className='panel panel-primary'>
          <div className='panel-heading h1 text-center'>
            Email
          </div>

          <div className='row'>
            <div className='col-md-2'>
              <div className='text-left h4 inline'><Link to='inbox'><i className='text-left fa fa-chevron-circle-left margin-right-2' />Back to Inbox</Link></div>
            </div>

            <div className='col-md-2'>
              <div className='text-right bold'>Author</div>
              <div className='text-right bold'>Subject</div>
              <div className='text-right bold'>Quote price</div>
              <div className='text-right bold'>Comments</div>
            </div>

            <div className='col-md-8'>
              <div>{this.state.email_item.author}</div>
              <div>{this.state.email_item.subject}</div>
              <div>{this.state.email_item.quote_price}</div>
              <div>{this.state.email_item.contents}</div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-7' />
            <div className='col-md-5'>
              <br />
              <button type="button" className="btn btn-primary margin-right-6">Accept this quote</button>
              <button type="button" className="btn btn-primary margin-left-6" onClick={this.reply}>Reply</button>
            </div>
          </div>
          <br />
          {reply}
        </div>
      </div>
    );
  }
})

module.exports = Email;