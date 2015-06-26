
'use strict'

let React        = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;


// REACT COMPONENTS
let Header              = require('./source/js/components/header/index');
let Footer              = require('./source/js/components/footer/index');
let BomIndex            = require('./source/js/components/boms/index');
let NewBom              = require('./source/js/components/boms/bom-new');
let PartMapper          = require('./source/js/components/boms/part-mapper/index');
let ContactInfo         = require('./source/js/components/account/contact-info/index');
let DistributorSettings = require('./source/js/components/account/distributor-settings/index');
let Results             = require('./source/js/components/results/index');
let InboxIndex          = require('./source/js/components/inbox/index');
let Email               = require('./source/js/components/inbox/email-view');



// var BomMatrix = require('./components/BomMatrix');
// var Account   = require('./components/Account');
// ROUTING
let Router       = require('react-router');
let DefaultRoute = Router.DefaultRoute;
let Link         = Router.Link;
let Route        = Router.Route;
let RouteHandler = Router.RouteHandler;
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
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});


// The routes need to go AFTER the App
let routes = (
  <Route   name           ="app" path="/"         handler={App}>
    <Route name           ="boms"                 handler={BomIndex} />
    <Route name           ="new-bom"              handler={NewBom} />
    <Route name           ="contact-info"         handler={ContactInfo} />
    <Route name           ="distributor-settings" handler={DistributorSettings} />
    <Route name           ="part-mapper"          handler={PartMapper} />
    <Route name           ="inbox"                handler={InboxIndex} />
    <Route path='email/:id'   name="email"   handler={Email} />
    <Route name="results" path="results/:id" handler={Results} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});




// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.getElementById('content'));
// });