'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// React Router
var Router       = require('react-router');
var Link         = Router.Link;
// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var PartMapperList = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
      bom_id: React.PropTypes.number,
      bom_name: React.PropTypes.string,
      bom_fields: React.PropTypes.array
    },

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
      var ourFields = [
        "Part Number",
        "Manufacturer",
        "Quantity",
        "Target Price",
        "Discription"
      ];

      var theirFields = [
        "Quantity",
        "Part Number",
        "Description",
        "SKU",
        "Manufacturer"
      ];

      var rows = ourFields.map( (field, i) => {
        return <tr key={i}><td>{field}</td><td></td></tr>
      });

      var list = theirFields.map( (field, i) => {
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