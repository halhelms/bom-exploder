'use strict'
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// BOOTSTRAP COMPONENTS
// var Panel = require('react-bootstrap').Panel;
// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var DistributorForm = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
      id: React.PropTypes.number
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

      var distributors = [
        {
          id: 1111,
          name: "Allied"
        },
        {
          id: 2222,
          name: "AvNet"
        },
        {
          id: 3333,
          name: "Digi-Key"
        },
        {
          id: 4444,
          name: "Farnell"
        }
      ];
      
      var options = distributors.map( (distributor, i) => {
        return <option key={distributor.id}>{distributor.name}</option>;
      });

      return (
        <div>
          <div className='col-md-2'></div>
          <div className='col-md-3'>
            <h3>Sales Rep Email</h3>
            <div className='form-group'>
              <input type='text' className='form-control' id={'email_' + this.props.id} />
            </div>
          </div>

          <div className='col-md-2'>
            <h3>Distributor</h3>
            <div className='form-group'>
              <select className='form-control'>
                {options}
              </select>
            </div>
          </div>

          <div className='col-md-3'>
            <h3>Sales Rep Name</h3>
            <div className='form-group'>
              <input type='text' className='form-control' id={'name_' + this.props.id} />
            </div>
          </div>
        </div>
      );
    }
})

module.exports = DistributorForm;