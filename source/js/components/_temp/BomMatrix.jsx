// I am the wrapper for displaying BOM parts and the matching parts from the distributors

'use strict'
var React              = require('react');
// Stores
var BOMStore           = require('../stores/BOMStore');
var DistributorsStore  = require('../stores/DistributorsStore');
// Actions
var BOMActions         = require('../actions/BOMActions');
// Components
var PartSearchForm     = require('../components/matrix/PartSearchForm');
var LinkHeader         = require('../components/matrix/LinkHeader');
var DistributorsForBOM = require('../components/matrix/DistributorsForBOM');
var SelectionOverview  = require('../components/matrix/SelectionOverview');
var BOMParts           = require('../components/matrix/BOMParts');
var MatchedTable       = require('../components/matrix/MatchedTable');
var Cart               = require('../components/matrix/Cart');
// Bootstrap components
var Grid = require('react-bootstrap').Grid; 
var Row  = require('react-bootstrap').Row;
var Col  = require('react-bootstrap').Col;

var BomMatrix = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState() {
    return (
      {
        bom_id: this.context.router.getCurrentParams().bom_id,
        bom: {}
      }
    );
  },

  onBOMStoreChange() {
    // put the store's BOM in our state
    this.setState({bom: BOMStore.getBOM()});
  },

  onDistributorsStoreChange() {
  },

  componentDidMount() {
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

  componentDidUnmount() {
    BOMStore.removeChangeListener(this.onBOMStoreChange);
  },

  render() {
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
          <Col xs={3}>
            <BOMParts bom_id={this.state.bom_id} />
          </Col>
          <Col xs={6}>
            <MatchedTable bom_id={this.state.bom_id} />
          </Col>
          <Col xs={3}>
            <Cart />
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = BomMatrix;