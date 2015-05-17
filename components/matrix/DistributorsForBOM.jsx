/** @jsx React.DOM */
'use strict'
var React         = require('react');

var BOMStore      = require('../../stores/BOMStore');

var MatrixActions = require('../../actions/MatrixActions');

var Router        = require('react-router');
var Link          = Router.Link;

var Label         = require('react-bootstrap').Label;
var Panel         = require('react-bootstrap').Panel;

// this component allows the buyer to select which distributors they wish to see results from
module.exports = React.createClass({
  displayName: 'DistributorsForBOM',

  getInitialState: function() {
    // we get the bom_id from props
    return {
      distributors: []
    };
  },

  getDefaultProps: function() {
    return {
      bom_id: 0
    };
  },

  onBOMStoreChange: function() {
    this.setState({distributors: BOMStore.getDistributorsForBOM()});
  },

  componentDidMount: function() {
    // notify the store we want to hear about changes
    BOMStore.addChangeListener(this.onBOMStoreChange);
    // see if there are already distributors in the store
    var distributors = BOMStore.getDistributorsForBOM();
    // no distributors? then let's create an action to get them
    if (isEmpty(distributors)) {
      MatrixActions.getDistributorsForBOM(this.props.bom_id);
    } else {
      // already have distributors? let's save them into our state
      this.setState({distributors: distributors});
    }
  },

  componentDidUnmount: function() {
    BOMStore.removeChangeListener(this.onBOMStoreChange);
  },

  onDistributorClick: function(e) {
    console.log('You clicked me');
    // todo
  },

  render: function() {
    var distributors = this.state.distributors.map(function(distributor, i) {
      var br  = function(){return (i % 5 === 0) ? <br /> : ""};
      return (
        <li>
          <input type="checkbox" key={distributor.id} onClick={this.onDistributorClick.bind(this, distributor.id)} /> {distributor.distributor_name}
        </li>
        );
      }, this);
    
    return (
      <Panel className={this.displayName} header="Distributors">
        <div className="use-choices">
          <Label>
            <input type="checkbox" id="filter-choices" />Filter by Distributors
          </Label>
        </div>
        <div className="meta-choices">
          <Label>
            <input type="checkbox" id="all" /> All
          </Label>

          <Label>
            <input type="checkbox" id="quoting" /> Quoting
          </Label>
        </div>

        <div className="distributor-choices">
          <ul className="list-inline">
            {distributors}
          </ul>
        </div>

        <div className="decorate-choices">
          <Label>
            <input type="checkbox" /> Highlight lowest price
          </Label>
          <Label>
            <input type="checkbox" /> Highlight quoted price
          </Label>
          <Label>
            <input type="checkbox" /> Hide parts that have been selected
          </Label>
        </div>
      </Panel>
    );
  }
})