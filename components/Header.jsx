/** @jsx React.DOM */
'use strict'
var React = require('react');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return (
      <div className="header">
        {/*<ul>
          <li><Link to="hello">Hello</Link></li>
          <li><Link to="goodbye">Goodbye</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>*/}
        Header
      </div>
    );
  }
})