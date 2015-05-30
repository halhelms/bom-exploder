// I give an overview of the state of the user's selections

'use strict'
var React         = require('react');

var BOMStore      = require('../../stores/BOMStore');
var MatrixActions = require('../../actions/MatrixActions');

var Panel         = require('react-bootstrap').Panel;

var SelectionOverview = React.createClass({

  getInitialState() {
    return {
      selection_percent: 0,
      total_target_price: 0,
      total_selected_price: 0
    };
  },

  getDefaultProps() {
    return {};
  },

  componentDidMount() {
    
  },

  componentDidUnmount() {
    
  },

  render() {
    var difference = this.state.total_selected_price - this.state.total_target_price; 
    var difference_description = difference > 0 ? "Over" : "Savings";
    return (
      <Panel header="Selection Overview">
        <p>Selected: {this.state.selection_percent}% of uploaded BOM parts</p>
        <p>Total Target Price: <span className="rt-align">${this.state.total_target_price}</span></p>
        <p>Total Selected Price: <span className="rt-align">${this.state.total_selected_price}</span></p>
        <p><span className="rt-align">${difference} {difference_description}</span></p>
      </Panel>
    );
  }
});

module.exports = SelectionOverview;