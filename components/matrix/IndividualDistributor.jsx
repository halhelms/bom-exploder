/** @jsx React.DOM */
'use strict'
var React    = require('react');

// Bootstrap components
var Rb       = require('react-bootstrap');
var Label    = Rb.Label;

var Checkbox = require('./Checkbox');

module.exports = React.createClass({

  handleClick: function() {
    // this.setState({checked: !this.state.checked});
  },

  render: function(){
    return (
      <Label>
        <Checkbox 
          id            ={this.props.id} 
          ref           ={this.props.id} 
          checked       ={this.props.checked} 
          changeHandler ={this.handleClick}/>
        {this.props.name}
      </Label>
    );
  }
})