/** @jsx React.DOM */
'use strict'
var React   = require('react');

var Router  = require('react-router');
var Link    = Router.Link;

var Nav     = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

module.exports = React.createClass({

  render: function(){
    return (
      <Nav bsStyle='pills'>
        <NavItem><Link to="account">My Account</Link></NavItem>
        <NavItem><Link to="boms">My BOMs</Link></NavItem>
      </Nav>
    );
  }
})
