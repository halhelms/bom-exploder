
'use strict'

var Router       = require('react-router');
var Link         = Router.Link;

var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <Link to="account">My Account</Link>{' '} 
        <Link to="boms">My BOMs</Link>
      </div>
    );
  }
});

module.exports = Header;