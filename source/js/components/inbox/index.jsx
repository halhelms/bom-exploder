'use strict'
let React        = require('react');

// STORES
// let Store     = require('../../stores/Store');
// ACTIONS
// let Actions   = require('../../actions/Actions');
// REACT COMPONENTS
let InboxHeading = require('./list-heading');
let InboxItem    = require('./list-item');
let TempStore    = require('../../stores/TempStore');

let InboxIndex = React.createClass({
  path: 'inbox/index',

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    this.setState({inbox_items: TempStore.getInboxItems()});
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    let inboxItems = this.state.inbox_items.map((inbox_item, i) => {
      return (
        <InboxItem item={inbox_item} key={i}/>
      );
    });

    return (
      <div className='panel panel-primary'>
        <div className='panel-heading text-center h1'>Inbox</div>
        
        <div className='row'>
          <div className='col-md-2' />
          <div className='col-md-10'>
            <InboxHeading />
          </div>
        </div>
        
        <div className='row'>
          <div className='col-md-2' />
          <div className='col-md-10'>
            {inboxItems}
          </div>
        </div>

        <br />
      </div>
    );
  }
})

module.exports = InboxIndex;