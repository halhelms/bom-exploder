/** @jsx React.DOM */
'use strict'
var React = require('react');

// Bootstrap components
var Rb = require('react-bootstrap');
var Label = Rb.Label;

var AllQuoting = require('./AllQuoting');
var Checkbox = require('./Checkbox');

module.exports = React.createClass({

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
})