'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var BOMStore        = require('/Users/halhelms/bom-exploder/stores/BOMStore');
// var BOMMatcherStore = require('/Users/halhelms/bom-exploder/stores/BOMMatcherStore');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var FilterDistributors       = require('./distributor-filters/filter-distributors');
var FilterAll                = require('./distributor-filters/filter-all');
var FilterQuoting            = require('./distributor-filters/filter-quoting');
var FilterSelectDistributors = require('./distributor-filters/filter-select-distributors');
var HighlightLowestPrice     = require('./distributor-filters/highlight-lowest-price');
var HighlightQuotedPrice     = require('./distributor-filters/highlight-quoted-price');
var HideSelectedParts        = require('./distributor-filters/hide-selected-parts');
var SelectionOverviewIndex   = require('./selection-overview/index');
var BomPartsIndex            = require('./bom-parts/index');
var MatchedPartsIndex        = require('./matched-parts/index');

var Results = React.createClass({
  getDefaultProps() {
    return (
      {
        bom_name: "iPhone 6 Charging Stand",
        bom_id: 0
      }
    );
  },

  render() {
    return (
      <div className='panel panel-primary padding'>
        <div className='panel-heading text-center h1'>Your BOM Part Matches</div>
        
        <div className='row panel-body'>
          <div className='col-md-12 text-center h3'>
            BOM: {this.props.bom_name}
          </div>
        </div>
      
        <div className='row panel-body'>
          <div className='col-md-9'>
            <div className='well'>
              <FilterDistributors />
              <div>
                <div className='inline push-right-6'>
                  <FilterAll />
                  <FilterQuoting />
                </div>
                <div className='inline'>
                  <FilterSelectDistributors />
                </div>
              </div>

              <div className='inline'>
                <HighlightLowestPrice />
                <HighlightQuotedPrice />
              </div>
              <div className='inline'>
                <HideSelectedParts />
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='well'>
              <SelectionOverviewIndex />
            </div>
          </div>

        </div>

        <div className='row panel-body'>
          <div className='col-md-3 bordered'>
            <BomPartsIndex />
          </div>

          <div className='col-md-9 bordered'>
            Matches

          </div>
        </div>

      </div>
    );
  }
});

module.exports = Results;