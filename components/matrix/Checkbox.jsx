/** @jsx React.DOM */
'use strict'
var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      checked: false,
      changeHandler: this.props.changeHandler 
    };
  },

  handleClick:function() {
    console.log('Checkbox clicked with state of ' + this.state.checked);
    // this.setState({checked: !this.state.checked});
    this.state.changeHandler();
  },

  getDefaultProps: function() {
    return (
      {
        checked : true,
        id      : "not-given",
        key     : "not-given",
        onChange: function(){}
      }
    );
  },

  componentWillMount: function() {
    console.log('Checkbox:componentWillMount');
    this.setState({checked: this.props.checked});
  },

  render: function(){
    if (this.props.checked) {
      return (
        <input 
          type="checkbox" 
          checked="checked" 
          id={this.props.id} 
          key={this.props.key} 
          onChange={this.handleClick} />
      );
    } else {
      return (
        <input 
          type="checkbox" 
          id={this.props.id} 
          key={this.props.key} 
          onChange={this.handleClick} />
      );
    };
  }
})