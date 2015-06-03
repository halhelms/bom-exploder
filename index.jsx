
'use strict'

var React        = require('react');

// REACT COMPONENTS
var Header       = require('./source/js/components/header/index');
var Footer       = require('./source/js/components/footer/index');
var BomIndex     = require('./source/js/components/boms/index');

var Results      = require('./source/js/components/results/index');
var Account      = require('./source/js/components/account/index');

// var BomMatrix = require('./components/BomMatrix');
// var Account   = require('./components/Account');
// ROUTING
var Router       = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link         = Router.Link;
var Route        = Router.Route;
var RouteHandler = Router.RouteHandler;
// STORES
// var BOMStore            = require('./stores/BOMStore');
// var DistributorsStore   = require('/Users/halhelms/bom-exploder/stores/DistributorsStore');
// GLOBALS
window.API              = "http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/";
// global.__base = __dirname + '/';
// ACTIONS
// var DistributorsActions = require('/Users/halhelms/bom-exploder/actions/DistributorsActions');

// The App component needs to go BEFORE the routes
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


// The routes need to go AFTER the App
var routes = (
    <Route name="app" path="/" handler={App}>
    <Route name           ="results/:bom_id" handler={Results} />
    <Route name           ="account" handler={Account} />
    <Route name           ="boms" handler={BomIndex} />
    <DefaultRoute handler ={BomIndex}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});




// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.getElementById('content'));
// });