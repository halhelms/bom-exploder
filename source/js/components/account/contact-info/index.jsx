
'use strict'
var React       = require('react');

var Router      = require('react-router');
var Link        = Router.Link;

var ContactForm = require('./contact-form');

var ContactInfo = React.createClass({

    getInitialState() {
      return {};
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