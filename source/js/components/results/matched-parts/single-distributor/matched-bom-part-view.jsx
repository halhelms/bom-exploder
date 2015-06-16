// I show columns of best matches by distributor for a given bom part

'use strict'

let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
let TempStore                                         = require('../../../../stores/TempStore');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS
let PriceBreak                                        = require('./price-break');


let SingleDistributorMatchedBomPartView = React.createClass({
  path: 'results/matched-parts/single-distributor/matched-bom-part-view',

  propTypes: {
  },  

  getInitialState() {
    return {
    };
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    // the store will already know this information so no need to send it anything
    this.setState({distributor_matches_for_bom_part: TempStore.getDistributorMatchesForBomPart()});
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    who.call(this);
    let matched_parts_rows = this.state.distributor_matches_for_bom_part.matched_parts.map((matched_part_detail, i) => {
      return (
        <tr key={i}>
          <td>{matched_part_detail.part_number}</td>
          <td>{matched_part_detail.manufacturer}</td>
          <td>{matched_part_detail.description}</td>
          <td>
            {matched_part_detail.price_breaks.forEach((price_break, j) => {
              <PriceBreak price_break={price_break} />
            })}
          </td>
          <td>{matched_part_detail.qoh}</td>
          <td>{matched_part_detail.moq}</td>
          <td></td>
        </tr>
      );
    });

    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Part No.</th>
              <th>Manufacturer</th>
              <th>Description</th>
              <th>Price Breaks</th>
              <th>QOH</th>
              <th>MOQ</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {matched_parts_rows}
          </tbody>
        </table>
      </div>
    );
  }
})

module.exports = SingleDistributorMatchedBomPartView;