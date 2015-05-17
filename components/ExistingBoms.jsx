/** @jsx React.DOM */
'use strict'
var React      = require('react');

var BOMActions = require('../actions/BOMActions');
var BOMStore   = require('../stores/BOMStore');

var Table = require('react-bootstrap').Table;

module.exports = React.createClass({
  getInitialState: function() {
    return {boms: []};
  },

  onBOMStoreChange: function() {
    this.setState({boms: BOMStore.getBOMs()});
  },

  componentDidMount: function() {
    BOMStore.addChangeListener(this.onBOMStoreChange);
    BOMActions.getBOMs(1);
  },

  componentDidUnmount: function() {
    BOMStore.removeChangeListener(this.onBOMStoreChange);
  },

  drilldown: function(bom_id) {
    BOMActions.getBOM(bom_id);
    window.location.href = "/#/bommatrix/" + bom_id;
  },

  render: function(){
    var boms = this.state.boms.map(function(bom){
      return( 
        <tr key={bom.id} onClick={this.drilldown.bind(this, bom.id)}>
          <td>
            {bom.name}
          </td>
          <td>
            {bom.description}
          </td>
          <td>
            {bom.created_on}
          </td>
          <td>
            {bom.last_updated_on}
          </td>
        </tr>
      )
    }, this);
    return (
      <div className="existing-boms">
        <h1>Existing BOMs</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Created</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {boms}
          </tbody>
        </Table>
      </div>
    );
  },
})