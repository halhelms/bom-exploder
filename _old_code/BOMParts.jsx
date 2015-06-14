
// I show all the parts uploaded as part of a chosen BOM

'use strict'
var React = require('react');

// Bootstrap components
var Panel = require('react-bootstrap').Panel;
var Table = require('react-bootstrap').Table;

// Stores
var BOMPartsStore = require('../../stores/BOMPartsStore');

// Actions
var MatrixActions = require('../../actions/MatrixActions');

var BOMParts = React.createClass({

  getInitialState() {
    return {
      parts: []
    };
  },

  getDefaultProps() {
    return {bom_id: 0};
  },

  onStoreChange () {
    this.setState({parts: BOMPartsStore.getBOMParts()});
  },

  componentDidMount() {
    // Let store know we want to hear any changes
    BOMPartsStore.addChangeListener(this.onStoreChange);
    // Get parts from the store
    var parts = BOMPartsStore.getBOMParts();
    // If there are no parts, fire an action to get them
    if (isEmpty(parts)) {
      MatrixActions.getBOMParts(this.props.bom_id);  
    } else {
      // if we have parts, let's store them in state
      this.setState({parts: parts});
    }
  },

  componentDidUnmount() {
    BOMPartsStore.removeChangeListener(this.onStoreChange);
  },

  render() {
    // Return parts for display
    var parts = this.state.parts.map(function(part, idx) {
      return (
        <div className="part-holder" key={idx}>
          <span className="part-info">
            {part.manufacturer}<br />
            {part.part_number}
          </span>
          <span className="part-targets">
            ${part.target_price}<br />
            {part.target_quantity}
          </span>
        </div>
      );
    });
    // Render this component
    return (
      <Panel header="Your BOM Parts">
        <div>
          <span>
            Mfgr <br />
            Part No.
          </span>
          <span>
            Target Price <br />
            Target Qty
          </span>
        </div>
        <div>
          {parts}
        </div>
      </Panel>
    );
  }
})

module.exports = BOMParts;