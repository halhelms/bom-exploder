'use strict'
let React           = require('react');

let {Router, Link}  = require('react-router');

let DistributorForm = require('./distributor-form');

let DistributorSettings = React.createClass({
  path: 'account/distributor-settings/index',

  getInitialState() {
    return {
      last_id: 0,
    };
  },

  componentWillMount() {
    
  },

  componentDidMount() {
  },

  componentDidUnmount() {
   
  },

  addRep() {
    this.setState({last_id: this.state.last_id + 1});
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
    
    let options = distributors.map( (distributor, i) => {
      return <option key={distributor.id}>{distributor.name}</option>;
    });

    return (
      <div className='panel panel-primary'>
        <div className='panel-heading text-center h1'>My Account</div>
        <ul className='nav nav-tabs'>
          <li><Link to="contact-info">My Contact Info</Link></li>
          <li className='active'><Link to="distributor-settings">My Distributors</Link></li>
        </ul>
        
        <div className='row'>
          <form>
            <DistributorForm id={this.state.last_id + 1} />
          </form>
        <div className='col-md-2'></div>
      </div>
      <div className="row">
        <div className='col-md-2'></div>
        <div className='col-md-3'>
          <button className='btn btn-x-lg btn-default' onClick={this.addRep}><i className='fa fa-user-plus'></i>Add another Sales Rep</button>
        </div>
        <div className='col-md-5 text-right'>
          <button className='btn btn-x-lg btn-primary'>Save</button>
        </div>
      </div>
      <br />
  </div>
    );
  }
})

module.exports = DistributorSettings;