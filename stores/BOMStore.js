var AppDispatcher   = require('../dispatcher/AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var BOMConstants    = require('../constants/BOMConstants');
var MatrixConstants = require('../constants/MatrixConstants');
var assign          = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';



var BOMStore = assign({}, EventEmitter.prototype, {
  state: {
    boms        : [],
    bom         : {},
    distributors: []
  },

  setState: function(obj) {
    assign(this.state, obj);
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function( callback ) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener: function( callback ) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getBOMs: function() {
    return this.state.boms;
  },

  getBOM: function() {
    return this.state.bom;
  },

  getDistributorsForBOM: function() {
    return this.state.distributors;
  },


});

// Registering for events we're interested in
AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    // when BOMs have been retrieved for a buyer
    case BOMConstants.FETCHED_BOMS:
      BOMStore.setState( {boms: payload.action.boms} );
      break;

    // when a single BOM has been fetched for a buyer
    case BOMConstants.FETCHED_BOM:
      BOMStore.setState({bom: payload.action.bom});
      break;

    // when distributors have been fetched for a BOM
    case MatrixConstants.FETCHED_DISTRIBUTORS_FOR_BOM:
      // set returned distributors into our state
      BOMStore.setState({distributors: payload.action.distributors});
      break;
  }
});

module.exports = BOMStore;
