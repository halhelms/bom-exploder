'use strict'

let Router       = require('react-router');
let Link         = Router.Link;

let React = require('react');
let PartSearcher = require('./part-searcher');


let Header = React.createClass({
  render() {
    return (
      <div className="header row">
        <div className="col-md-8" />
        <div className="col-md-4">
          <Link to="contact-info">My Account</Link>{' '} | {' '}
          <Link to="boms">My BOMs</Link>
          <div className='text-right part-searcher inline'><PartSearcher /></div>
        </div>
      </div>
    );
  }
});

module.exports = Header;