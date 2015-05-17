/** @jsx React.DOM */
'use strict'
var React = require('react');

module.exports = React.createClass({

    render: function(){
      return (
        <div className="part-search-form">
          <input type="text" id="part-search" placeholder="Search for Part Number" />
        </div>
      );
    }
})