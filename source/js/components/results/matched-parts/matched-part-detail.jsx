'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var MatchedPartDetail = React.createClass({

    getInitialState() {
      return {
      };
    },

    getDefaultProps() {
      return {};
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {

      return (
        <div className='matched-part inline'>
          {this.props.matched_part.price}<br />
          {this.props.matched_part.qoh}<br />
          {this.props.matched_part.moq}
        </div>
      );
    }
})

module.exports = MatchedPartDetail;