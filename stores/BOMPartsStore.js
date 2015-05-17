var AppDispatcher   = require('../dispatcher/AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var MatrixConstants = require('../constants/MatrixConstants');
var assign          = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var BOMPartsStore = assign({}, EventEmitter.prototype, {
  state: {
    parts: []
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

  getBOMParts: function() {
    return this.state.parts;
  },
});


// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case MatrixConstants.FETCHED_BOM_PARTS:
      BOMPartsStore.setState( {parts: payload.action.parts} );
      break;
  }
});

module.exports = BOMPartsStore;
