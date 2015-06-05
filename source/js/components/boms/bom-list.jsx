'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;


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
      var boms = [
        {
          "name": "iPhone 6 Charging Station",
          "id": "10000",
          "description": "Charging station for iPhone 6/6+",
          "created_on": "12 July 2015",
          "last_updated_on": "12 July 2015",
          "new_quotes": "true"
        },
        {
          "name": "Bacon Toaster",
          "id": "20000",
          "description": "Make bacon as easily as you make toast",
          "created_on": "23 July 2015",
          "last_updated_on": "26 July 2015",
          "new_quotes": "false"
        },
        {
          "name": "Time Traveler",
          "id": "30000",
          "description": "Time travel device",
          "created_on": "2 August 2015",
          "last_updated_on": "9 August 2015",
          "new_quotes": "false"
        }
      ];
      var rows = boms.map( bom => {return (
          <tr key={bom.id}>
            <td>{bom.new_quotes === "true" ? <i className='fa fa-quote-left'></i> : ""}{bom.name}</td>
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