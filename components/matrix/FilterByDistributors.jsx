/** @jsx React.DOM */

// I let the user determine whether they want to use any filters whatsoever

'use strict'
var React = require('react');
// React components
var AllQuoting = require('./AllQuoting');
var Checkbox = require('../foundation/Checkbox');
// Bootstrap components
var Rb = require('react-bootstrap');
var Label = Rb.Label;

var FilterByDistributors = React.createClass({

  getInitialState: function() {
    return {checked: true};
  },

  handleClick: function() {
    this.setState({checked: !this.state.checked})
  },

  render: function(){
    return (
      <div className="use-choices">
        <Label>
          <Checkbox 
            checked={this.state.checked} 
            changeHandler={this.handleClick} 
            id="all-checked" />
          Filter by Distributors
        </Label>
        <AllQuoting on={this.state.checked} bom_id={this.props.bom_id} />
      </div>
    );
  }
});

module.exports = FilterByDistributors;