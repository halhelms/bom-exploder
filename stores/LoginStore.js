var AppDispatcher  = require('../dispatcher/AppDispatcher');
var EventEmitter   = require('events').EventEmitter;
var LoginConstants = require('../constants/LoginConstants');
var assign         = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var LoginStore = assign({}, EventEmitter.prototype, {
  state: {
    currentUser: {}
  },

  setState: function( obj ){
    assign(this.state, obj);
    this.emitChange();
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function( callback ) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener: function( callback ) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCurrentUser: function(){
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
