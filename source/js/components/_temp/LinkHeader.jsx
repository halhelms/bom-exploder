

// I am a header menu that links to the user's account and their BOMs

'use strict'
var React   = require('react');

// Router components
var Router  = require('react-router');
var Link    = Router.Link;
// Bootstrap components
var Nav     = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var LinkHeader = React.createClass({

  render() {
    return (
      <Nav bsStyle='pills'>
        <NavItem><Link to="account">My Account</Link></NavItem>
        <NavItem><Link to="boms">My BOMs</Link></NavItem>
      </Nav>
    );
  }
});

module.exports = LinkHeader;