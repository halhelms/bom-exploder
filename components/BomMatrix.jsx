/** @jsx React.DOM */
'use strict'
var React              = require('react');
var BOMStore           = require('../stores/BOMStore');
var BOMActions         = require('../actions/BOMActions');
var PartSearchForm     = require('../components/matrix/PartSearchForm');
var LinkHeader         = require('../components/matrix/LinkHeader');
var DistributorsForBOM = require('../components/matrix/DistributorsForBOM');
var SelectionOverview  = require('../components/matrix/SelectionOverview');
var BOMParts           = require('../components/matrix/BOMParts');

var Grid = require('react-bootstrap').Grid; 
var Row  = require('react-bootstrap').Row;
var Col  = require('react-bootstrap').Col;

module.exports = React.createClass({
  displayName: 'BomMatrix',

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return (
      {
        bom_id: this.context.router.getCurrentParams().bom_id,
        bom: {}
      }
    );
  },

  onBOMStoreChange: function() {
    // put the store's BOM in our state
    this.setState({bom: BOMStore.getBOM()});
  },

  componentDidMount: function() {
    // let the store know we want to hear about changes
    BOMStore.addChangeListener(this.onBOMStoreChange);
    // get BOM from store
    var bom = BOMStore.getBOM();
    // No BOM in store? Call an action
    if (isEmpty(bom)) {
      BOMActions.getBOM(this.state.bom_id);
    // Found BOM in store? Then store it in our state
    } else {
      this.setState({bom: bom});
    }
  },

  componentDidUnmount: function() {
    BOMStore.removeChangeListener(this.onBOMStoreChange);
  },

  render: function(){
      return (
        <Grid>
          <Row className="show-grid"> 
            <Col xs={8} />
            <Col xs={4}>
              <LinkHeader />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <h1>Results for {this.state.bom.name}</h1>   
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={9}>
              <DistributorsForBOM bom_id={this.state.bom_id} />
            </Col>
            <Col xs={3}>
              <SelectionOverview />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={4}>
              <BOMParts bom_id={this.state.bom_id} />
            </Col>
          </Row>
        </Grid>
      );
  }
})