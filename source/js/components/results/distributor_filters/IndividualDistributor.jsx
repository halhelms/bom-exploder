

// I am a checkbox component for an individual distributor, allowing a user to hide/show results for that distributor
'use strict'
var React    = require('react');

// Bootstrap components
var Rb       = require('react-bootstrap');
var Label    = Rb.Label;
// React components
var Checkbox = require('../foundation/Checkbox');
// Actions
var DistributorsActions = require('../../actions/DistributorsActions');

var IndividualDistributor = React.createClass({

  getInitialState() {
    return(
      {
        id  : this.props.id,
        name: this.props.name
      }
    );
  },

  handleCheckbox() {
    // todo: Why do I have to reverse the state of my child???
    if (!this.refs.checkbox.state.checked) {
      DistributorsActions.showResultsForDistributor(this.refs.checkbox.props.id);
    } else {
      DistributorsActions.hideResultsForDistributor(this.refs.checkbox.props.id);
    }
  },

  handleClick() {
    // this.setState({checked: !this.state.checked});
  },

  render() {
    return (
      <Label>
        <Checkbox 
          id            ={this.props.id} 
          ref           ="checkbox"
          checked       ={this.props.checked} 
          changeHandler ={this.handleCheckbox}/>
        {this.props.name}
      </Label>
    );
  }
});

module.exports = IndividualDistributor;