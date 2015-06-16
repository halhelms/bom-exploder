'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES

// ACTIONS
// let Actions                                        = require('../../actions/Actions');

// REACT COMPONENTS
let FilterDistributors                                = require('./distributor-filters/filter-distributors');
let FilterAll                                         = require('./distributor-filters/filter-all');
let FilterQuoting                                     = require('./distributor-filters/filter-quoting');
let FilterSelectDistributors                          = require('./distributor-filters/filter-select-distributors');
let HighlightLowestPrice                              = require('./distributor-filters/highlight-lowest-price');
let HighlightQuotedPrice                              = require('./distributor-filters/highlight-quoted-price');
let HideSelectedParts                                 = require('./distributor-filters/hide-selected-parts');
let SelectionOverviewIndex                            = require('./selection-overview/index');
let BomPartsIndex                                     = require('./bom-parts/index');
let MatchedPartsIndex                                 = require('./matched-parts/index');

let TempStore                                         = require('../../stores/TempStore');

let Results = React.createClass({
  path: 'results/matched-parts/index',

  propTypes: {
    bom_name: string,
    bom_id: number
  },
  
  getDefaultProps() {
    return (
      {
        bom_name: "iPhone 6 Charging Stand",
        bom_id: 0
      }
    );
  },

  componentWillMount() {
    this.setState({results: TempStore.getResults()});
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
            <MatchedPartsIndex />
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Results;