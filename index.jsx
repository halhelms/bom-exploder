
'use strict'

var React               = require('react');

// COMPONENTS
var Header              = require('./components/header/Header');
var Footer              = require('./components/footer/Footer');
var TestPage            = require('./components/pages/TestPage');
var ResultsWorksheetPage= require('./components/pages/ResultsWorksheetPage');
// var ExistingBoms        = require('/components/account/ExistingBoms');
// var BomMatrix        = require('./components/BomMatrix');
// var Account          = require('./components/Account');
// ROUTING
var Router              = require('react-router');
var DefaultRoute        = Router.DefaultRoute;
var Link                = Router.Link;
var Route               = Router.Route;
var RouteHandler        = Router.RouteHandler;
// STORES
// var BOMStore            = require('./stores/BOMStore');
// var DistributorsStore   = require('./stores/DistributorsStore');
// GLOBALS
// window.API              = "http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/";
// ACTIONS
// var DistributorsActions = require('./actions/DistributorsActions');

var App = React.createClass({
  componentWillMount() {
    // DistributorsActions.fetchDistributors();
  },

  render() {
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
    <Route name="Header" handler={Header} />
    <Route name="Footer" handler={Footer} />
    <Route name="TestPage" handler={TestPage} />
    <Route name="ResultsWorksheetPage" handler={ResultsWorksheetPage} />
    <DefaultRoute handler ={TestPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});




// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.getElementById('content'));
// });