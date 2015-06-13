'use strict'
let React = require('react');
// React Router
let Router       = require('react-router');
let Link         = Router.Link;
// React components
let BomList = require('./bom-list');
// Bootstrap components

let BomIndex = React.createClass({

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {

    };
  },

  componentWillMount() {
    
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