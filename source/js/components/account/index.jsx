
'use strict'
var React = require('react');

var Router       = require('react-router');
var Link         = Router.Link;

var AccountIndex = React.createClass({

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
            <li className='active'>My Contact Info</li>
            <li><Link to="my-distributors">My Distributors</Link></li>
          </ul>
        </div>
      );
    }
})

module.exports = AccountIndex;