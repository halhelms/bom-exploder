/** @jsx React.DOM */

// I show the All and Quoting checkboxes and, additionally, delegate to IndividualDistributor
// all of the checkboxes for making show/hide decisions

'use strict'
var React    = require('react');
var BOMStore = require('../../stores/BOMStore');
var $        = require('jquery');

// Bootstrap components
var Rb    = require('react-bootstrap');
var Label = Rb.Label;

var IndividualDistributor = require('./IndividualDistributor');
var Checkbox              = require('../foundation/Checkbox');

var AllQuoting = React.createClass({

  getInitialState: function() {
    return {
      all_checked    : true,
      quoting_checked: false,
      distributors   : []
    };
  },

  componentDidMount: function() {
    var bom_id = this.props.bom_id;

    $.get(
        window.API + 'boms/' + bom_id + '/distributors', 
        function(data) {
          this.setState({
            distributors: data
          });
        }.bind(this)
      );
  },

  handleAllClick: function() {
    this.setState({all_checked: !this.state.all_checked});
  },

  handleQuoteClick: function() {
    console.log('Quote was clicked');
  },

  handleIndividualCheckboxClick: function() {
    console.log(this.props.children);
  },

  render: function(){
    // If props.on is false, I shouldn't render
    // Also, if I don't have any distributors, I shouldn't be rendering
    if (!this.props.on || isEmpty(this.state.distributors)) {return false};

    // I get all the distributors and create separate IndividualDistributor components for each one
    var distributors = this.state.distributors.map(function(distributor, i) {
      return (
        <IndividualDistributor 
          checked         = {this.state.all_checked} 
          quoting_checked = {this.state.quoting_checked} 
          name            = {distributor.distributor_name} 
          id              = {distributor.distributor_id}
          changeHandler   = {this.handleIndividualCheckboxClick}
          key             = {i}
          quoting         = {false} />
      );
    }.bind(this));
    
    return (
      <div className="meta-choices">
        {/* Checkbox for selecting all individual distributors */}
        <Label>
          <Checkbox 
            id            = "quoting-all" 
            changeHandler = {this.handleAllClick} 
            checked       = {this.state.all_checked} /> 
          All
        </Label>
      {/* Checkbox for selecting those individual distributors providing quotes */}
        <Label>
          <Checkbox 
            id            = "quoting" 
            changeHandler = {this.handleQuoteClick} 
            checked       = {this.state.quoting_checked} /> 
          Quoting
        </Label>
        {/* Now to show the checkboxes for individual distributors */}
        {distributors}
      </div>
    );
  }
})

module.exports = AllQuoting;