'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
let TempStore                                         = require('../../../../../stores/TempStore');
// ACTIONS
let EachMatchActions                                  = require('../../../../../actions/results/matched-parts/all-distributors/each-match/actions');
// REACT COMPONENTS

let MatchedPartDetail = React.createClass({
  path: 'results/matched-parts/all-distributors/each-match/detail',

  propTypes: {
    matched_part: object.isRequired,
    bom_part_number: string.isRequired,
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

  },

  componentDidMount() {
  
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('componentWillUpdate in detail', nextProps, nextState);
  },

  componentDidUnmount() {

  },

  moreMatchingParts() {
    EachMatchActions.setAllMatchesForBomPartFromDistributor(this.props.bom_part_number, this.props.distributor_id);
  },

  render() {

    let icons = null;

    if (!isEmpty(this.props.matched_part)) {
      icons = (
        <div className='inline' style={{float:'right'}}>
          <i data-ot="Mark part as SELECTED" data-ot-delay='0.2' data-ot-style="dark" className='glyphicon glyphicon-shopping-cart' /><br />
          <i onClick = {this.moreMatchingParts} data-ot="More info on matching parts by this vendor" data-ot-delay='0.2' data-ot-style="dark" className='glyphicon glyphicon-new-window' /><br />
          {this.props.matched_part.quoted === 'true' ? <i data-ot="Quoted by this vendor" data-ot-delay='0.2' data-ot-style="dark" className='fa fa-quote-left' /> : null}
        </div>
      );
    } else {
      icons = (
        <div />
      );
    }

    return (
      <div className='matched-part inline width-30'>
        <div className='inline'>
          {this.props.matched_part.price}<br />
          {this.props.matched_part.qoh}<br />
          {this.props.matched_part.moq}
        </div>

        {icons}
      </div>

    );
  }
})

module.exports = MatchedPartDetail;