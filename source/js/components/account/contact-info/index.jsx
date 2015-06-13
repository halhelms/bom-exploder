
'use strict'
let React       = require('react');

let Router      = require('react-router');
let Link        = Router.Link;

let ContactForm = require('./contact-form');

let ContactInfo = React.createClass({

  getInitialState() {
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
      <div className='panel panel-primary'>
        <div className='panel-heading text-center h1'>My Account</div>
        <ul className='nav nav-tabs'>
          <li className='active'><a href="#">My Contact Info</a></li>
          <li className='inactive'><Link to="distributor-settings">My Distributors</Link></li>
        </ul>
        <ContactForm />
      </div>
    );
  }
})

module.exports = ContactInfo;