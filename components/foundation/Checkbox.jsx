/** @jsx React.DOM */

// I am a foundational checkbox. I'm needed because of the bizarre way HTML handles the 'checked' attribute

'use strict'
var React = require('react');

var Checkbox = React.createClass({

  getInitialState: function() {
    return {
      checked: this.props.checked
    };
  },

  handleClick:function() {
    this.setState({checked: !this.state.checked});
    this.props.changeHandler();
  },

  getDefaultProps: function() {
    return (
      {
        un_checked: true,
        id        : "not-given",
        key       : "not-given"
      }
    );
  },

  componentWillMount: function() {
  },

  componentWillReceiveProps: function() {
    this.setState({checked: this.props.checked});
  },

  render: function(){
    if (this.state.checked) {
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

module.exports = Checkbox;