'use strict'
let React           = require('react');
let PureRenderMixin = require('react/addons').addons.PureRenderMixin;

let Router          = require('react-router');
let Link            = Router.Link;

// STORES
// let ???Store = require('../../stores/???Store');
// ACTIONS
// let ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


let ContactForm = React.createClass({
  mixins: [PureRenderMixin],

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
    return (
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className='well'>
            <form>
              <div className='form-group'>
                <label htmlFor='first-name'>First Name</label>
                <input type='text' className='form-control' id='first-name' placeholder='First name' />
              </div>
              <div className='form-group'>
                <label htmlFor='last-name'>Last Name</label>
                <input type='text' className='form-control' id='last-name' placeholder='Last name' />
              </div>
              <div className='form-group'>
                <label htmlFor='company'>Company</label>
                <input type='text' className='form-control' id='company' placeholder='Company' />
              </div>
              <div className='form-group'>
                <label htmlFor='Email'>Email</label>
                <input type='text' className='form-control' id='email' placeholder='Email (and user login)' />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' className='form-control' id='phone' placeholder='Phone' />
              </div>
              
              <div className='form-group text-right'>
                <button type='button' className='btn btn-primary btn-lg'>Save</button>
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
    );
  }
})

module.exports = ContactForm;