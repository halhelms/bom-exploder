webpackHotUpdate(0,{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict'
	var React = __webpack_require__(111);
	var PureRenderMixin = __webpack_require__(11).addons.PureRenderMixin;

	var Router       = __webpack_require__(9);
	var Link         = Router.Link;
	// STORES
	// var ???Store = require('../../stores/???Store');
	// ACTIONS
	// var ???Actions = require('../../actions/???Actions');
	// REACT COMPONENTS


	var BomList = React.createClass({displayName: "BomList",
	    mixins: [PureRenderMixin],

	    getInitialState:function() {
	      return {};
	    },

	    getDefaultProps:function() {
	      return {};
	    },

	    componentDidMount:function() {

	    },

	    componentDidUnmount:function() {

	    },

	    render:function() {
	      return (
	        React.createElement("div", {className: "col-md-12"}, 
	          React.createElement("div", {className: "h1 col-md-10 text-center"}, "Your BOMs"), 
	          React.createElement("div", {className: "col-md-2"}, 
	            React.createElement(Link, {to: "new-bom"}, "Create New BOM")
	          )
	        )
	      );
	    }
	})

	module.exports = BomList;

/***/ }

})