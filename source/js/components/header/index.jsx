
'use strict'

var Router       = require('react-router');
var Link         = Router.Link;

var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div className="col-md-8" />
        <div className="col-md-4">
          <Link to="contact-info">My Account</Link>{' '} | {' '}
          <Link to="boms">My BOMs</Link>
        </div>
      </div>
    );
  }
});

module.exports = Header;