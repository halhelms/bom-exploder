var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var BOMConstants  = require('../constants/BOMConstants');
var assign        = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var BOMMatcherStore = assign({}, EventEmitter.prototype, {
  state: {
    matches: {}
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
});


// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case BOMConstants.FETCHED_MATCHES:
      BOMStore.setState( {matches: payload.action.matches} );
      break;
  }
});

module.exports = BOMMatcherStore;
