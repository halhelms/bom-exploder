var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var ???Constants  = require('../constants/???Constants');
var assign        = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var ???Store = assign({}, EventEmitter.prototype, {
  state: {

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
    case ???Constants.???:
      BOMStore.setState( {???: payload.action.???} );
      break;
  }
});

module.exports = ???Store;
