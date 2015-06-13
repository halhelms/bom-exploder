'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// React Router
let Router       = require('react-router');
let Link         = Router.Link;

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let PartMapperList = React.createClass({

  propTypes: {
    bom_id    : number,
    bom_name  : string,
    bom_fields: array
  },

  getInitialState() {
    return {};
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
    let ourFields = [
      "Part Number",
      "Manufacturer",
      "Quantity",
      "Target Price",
      "Discription"
    ];

    let theirFields = [
      "Quantity",
      "Part Number",
      "Description",
      "SKU",
      "Manufacturer"
    ];

    let rows = ourFields.map( (field, i) => {
      return <tr key={i}><td>{field}</td><td></td></tr>
    });

    let list = theirFields.map( (field, i) => {
      return (
        <li key={i}><i className='fa fa-columns fa-2x'></i>{field}</li>
      );
    });
    return (
      <div>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-7'>
            <table className='table table-bordered'>
              <thead>
                <tr><th>Our Fields</th><th>Matched Fields</th></tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
          <div className='col-md-2 well'>
            <h5>Your BOM Fields</h5>
            <ul className='list-unstyled'>
              {list}
            </ul>
          </div>
        </div>
        <div className='row text-right'>
          <div className='col-md-9'>
            <Link to="boms"> <button type='button' className='btn btn-primary btn-lg'>OK</button></Link>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = PartMapperList;