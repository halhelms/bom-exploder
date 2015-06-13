'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let MatchedPartDetail = React.createClass({

  propTypes: {
    matched_part: React.PropTypes.object.isRequired,
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

  componentDidUnmount() {

  },

  render() {
    let icons = null;

    if (!isEmpty(this.props.matched_part)) {
      icons = (
        <div className='inline' style={{float:'right'}}>
          <i data-ot="Mark part as SELECTED" data-ot-delay='0.2' data-ot-style="dark" className='glyphicon glyphicon-shopping-cart' /><br />
          <i data-ot="More info on matching parts by this vendor" data-ot-delay='0.2' data-ot-style="dark" className='glyphicon glyphicon-new-window' /><br />
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