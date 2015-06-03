var AppDispatcher  = require('../dispatcher/AppDispatcher');
var EventEmitter   = require('events').EventEmitter;
var LoginConstants = require('../constants/LoginConstants');
var assign         = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var LoginStore = assign({}, EventEmitter.prototype, {
  state: {
    currentUser: {}
  },

  setState( obj ){
    assign(this.state, obj);
    this.emitChange();
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback  {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCurrentUser(){
    return this.state.currentUser;
  },


});

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case LoginConstants.SUCCESSFUL_LOGIN:
      LoginStore.setState( {currentUser: payload.action.user_info} );
      break;
  }
});

module.exports = LoginStore;
