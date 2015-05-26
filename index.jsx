/** @jsx React.DOM */
'use strict'

var React        = require('react');

// Components
var HelloThere   = require('./components/Hello');
var GoodbyeThere = require('./components/Goodbye');
var Header       = require('./components/Header');
var Footer       = require('./components/Footer');
var Login        = require('./components/Login');
var ExistingBoms = require('./components/ExistingBoms');
var BomMatrix    = require('./components/BomMatrix');
var Account      = require('./components/Account');

// Routing
var Router       = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link         = Router.Link;
var Route        = Router.Route;
var RouteHandler = Router.RouteHandler;

// Stores
var LoginStore        = require('./stores/LoginStore');
var BOMStore          = require('./stores/BOMStore');
var DistributorsStore = require('./stores/DistributorsStore');

// Globals
window.API       = "http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/";
// Actions
var DistributorsActions = require('./actions/DistributorsActions');

var App = React.createClass({
  componentWillMount: function() {
    DistributorsActions.fetchDistributors();
  },

  render: function () {
    return (
      <div>
        <Header/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name ="hello" handler={HelloThere}/>
    <Route name ="goodbye" handler={GoodbyeThere}/>
    <Route name ="login" handler={Login}/>
    <Route name ="boms" handler={ExistingBoms}/>
    <Route name ="bommatrix" handler={BomMatrix}>
       <Route path=":bom_id"/>
    </Route>
    <Route name="account" handler={Account}/>
    <DefaultRoute handler ={ExistingBoms}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.getElementById('content'));
// });