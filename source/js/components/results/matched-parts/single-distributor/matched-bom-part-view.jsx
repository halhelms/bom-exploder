'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;
// STORES
let TempStore = require('../../../../stores/TempStore');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
let PriceBreak = require('./price-break');


let SingleDistributorMatchedBomPartView = React.createClass({
  propTypes: {
    bom_id        : string.isRequired,
    distributor_id: string.isRequired
  },  

  getInitialState() {
    return {
    };
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    this.setState({matched_parts_details: TempStore.getMatchedPartsDetails(this.props.bom_id, this.props.distributor_id)});
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {
    let matched_parts_rows = this.state.matched_parts_details.matched_parts.map((matched_part_detail, i) => {
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