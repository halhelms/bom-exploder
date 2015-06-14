var AppDispatcher           = require('../dispatcher/AppDispatcher');
var EventEmitter            = require('events').EventEmitter;
var Constants               = require('../constants/Constants');
var assign                  = require('../node_modules/object-assign');
EventEmitter.prototype.vars = {};



assign(this.vars, {msg: 'hello'})



var CHANGE_EVENT  = 'change';

var Store = assign({}, EventEmitter.prototype, {
  state: {

  },

  setState(obj) {
    assign(this.state, obj);
    this.emitEvent(obj);
  },

  emitEvent(obj) {
    assign(this.vars, vars);
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});


// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case Constants.:
      Store.setState( {x: payload.action.x} );
      break;
  }
});

module.exports = Store;
