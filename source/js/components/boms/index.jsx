'use strict'
var React = require('react');
// React Router
var Router       = require('react-router');
var Link         = Router.Link;
// React components
var BomList = require('./bom-list');
// Bootstrap components

var BomIndex = React.createClass({

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {

      };
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      return (
        <div className='panel panel-primary'>
          <div className='panel-heading text-center h1'>My BOMs</div>
          <div className='panel-body text-right'><Link to="new-bom" className="nav nav-right">Create New BOM</Link></div>
          <BomList />
        </div>
      );
    }
})

module.exports = BomIndex;