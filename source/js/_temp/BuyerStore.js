AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
// var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var BuyerStore = assign({}, EventEmitter.prototype, {
  state: {
    message: "Someone should make Flux a little easier",
  },

  setState(obj){
    assign(this.state, obj);
    this.emitChange();
  },

  getBuyerInfo() {
    return this.state.buyer_info;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener( callback ) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener( callback ) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMessage() {
    return this.state.message;
  },

});

// AppDispatcher.register(function(payload){
//   switch (payload.action.actionType) {
//     case AppConstants.FETCHED_BUYER_INFO:
//       console.log( 'BuyerStore:' + AppConstants.FETCHED_BUYER_INFO);
//       console.log(payload);
//       console.log("Putting into BuyerStore state...");
//       console.log(payload.action.buyer_info);
//       BuyerStore.setState({buyer_info: payload.action.buyer_info});
//       break;
//   }
// });

module.exports = BuyerStore;
