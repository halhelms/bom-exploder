
'use strict'

let React        = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;


// REACT COMPONENTS
let BomIndex            = require('./source/js/components/boms/index');



// var BomMatrix = require('./components/BomMatrix');
// var Account   = require('./components/Account');
// ROUTING
let Router       = require('react-router');
let {DefaultRoute, Link, Route, RouteHandler} = Router;
// STORES
// var BOMStore            = require('./stores/BOMStore');
// var DistributorsStore   = require('/Users/halhelms/bom-exploder/stores/DistributorsStore');
// GLOBALS
window.API              = "http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/";
// global.__base = __dirname + '/';
// ACTIONS
// var DistributorsActions = require('/Users/halhelms/bom-exploder/actions/DistributorsActions');

// The App component needs to go BEFORE the routes
let App = React.createClass({
  path: 'index',

  componentWillMount() {
    // DistributorsActions.fetchDistributors();
  },

  render() {
    who.call(this);

    console.log('params', this.props.params)
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});


// The routes need to go AFTER the App
let routes = (
  <Route   name           ="app" path="/"         handler={App}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});




// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.getElementById('content'));
// });