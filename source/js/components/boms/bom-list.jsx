'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Router       = require('react-router');
var Link         = Router.Link;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var BomList = React.createClass({
    mixins: [PureRenderMixin],

    getInitialState() {
      return {};
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
        <div className="col-md-12">
          <div className="h1 col-md-10 text-center">My BOMs</div>
          <div className="col-md-2">
            <Link to="new-bom">Create New BOM</Link>
          </div>
        </div>
      );
    }
})

module.exports = BomList;