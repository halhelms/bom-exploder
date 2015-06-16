'use strict'
let React          = require('react');

let {Router, Link} = require('react-router');
// STORES
let TempStore      = require('../../stores/TempStore');
// ACTIONS
// let Actions     = require('../../actions/Actions');
// REACT COMPONENTS


let BomList = React.createClass({
  path: 'boms/bom-list',

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    this.setState({boms: TempStore.getBoms()});
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  render() {

    let rows = this.state.boms.map( bom => {return (
        <tr key={bom.id}>
          <td><Link to="results" params={{id: bom.id}}>{bom.new_quotes === "true" ? <i className='fa fa-quote-left'></i> : ""}{bom.name}</Link></td>
          <td>{bom.description}</td>
          <td>{bom.created_on}</td>
        </tr>
      )});
    return (

      <table className='table table-striped table-bordered table-hover'>
        <thead></thead>
        <tbody>
          <tr><th>Name</th><th>Description</th><th>Created on</th></tr>
          {rows}
        </tbody>
      </table>
    );
  }
})

module.exports = BomList;