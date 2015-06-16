'use strict'
let React          = require('react');

// React Router
let {Router, Link} = require('react-router');
// STORES
// let Store       = require('../../stores/Store');
// ACTIONS
// let Actions     = require('../../actions/Actions');
// REACT COMPONENTS


let BomAdd = React.createClass({
  path: 'boms/bom-add',

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
                <label htmlFor='project-name'>Project Name</label>
                <input type='text' className='form-control' id='project-name' placeholder='Project name' />
              </div>
              <div className='form-group'>
                <label htmlFor='project-description'>Project Description</label>
                <textarea rows='5' className='form-control' id='project-description' placeholder='Project description' />
              </div>
              <div className='form-group'>
                <label htmlFor='file-upload'>Upload Excel BOM File <i className='glyphicon glyphicon-cloud-upload'></i></label>
                <div className='btn btn-default btn-file file-upload-button'>
                  <input type='file'/>
                </div>
              </div>
              <h4>- OR -</h4>
              <div className='form-group'>
                <label htmlFor='paste-upload'>Paste Your BOM</label>
                <textarea rows='8' className='form-control' id='paste-upload' placeholder='BOM Parts' />
              </div>
              <div className='form-group text-right'>
                <Link to="part-mapper"><button type='button' className='btn btn-default btn-lg'>Cancel</button> <button type='button' className='btn btn-primary btn-lg'>OK</button></Link>
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
    );
  }
})

module.exports = BomAdd;