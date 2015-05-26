/** @jsx React.DOM */

// I'm a humble soul -- I just let people search for parts

'use strict'
var React = require('react');

var PartSearchForm = React.createClass({

  render: function(){
    return (
      <div className="part-search-form">
        <input type="text" id="part-search" placeholder="Search for Part Number" />
      </div>
    );
  }
});

module.exports = PartSearchForm;