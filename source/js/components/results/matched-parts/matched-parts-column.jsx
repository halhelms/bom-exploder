'use strict'
var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS
var MatchedPartsHeader = require('./matched-parts-header');
var MatchedPartDetail  = require('./matched-part-detail');

var MatchedPartsColumn = React.createClass({

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
        <div>
          <MatchedPartsHeader distributor_name={this.props.distributor.name} />  
        </div>
      );
    }
})

module.exports = MatchedPartsColumn;