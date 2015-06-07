'use strict'
var React = require('react');

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var MatchedPartsHeader = React.createClass({

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
          <div className='matched-part-header inline'>
            {this.props.distributor.distributor_name}
          </div>
      );
    }
})

module.exports = MatchedPartsHeader;