
'use strict'
var React = require('react');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

module.exports = React.createClass({
  render() {
    return (
      <div className="header">
        Header
      </div>
    );
  }
})