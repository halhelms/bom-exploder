var AppDispatcher   = require('../dispatcher/AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var BOMConstants    = require('../constants/BOMConstants');
var MatrixConstants = require('../constants/MatrixConstants');
var assign          = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var BOMMatcherStore = assign({}, EventEmitter.prototype, {
  state: {
    matches: {}
  },

  setState(obj) {
    assign(this.state, obj);
    this.emit(CHANGE_EVENT);
 },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
 },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMatches() {
    return this.state.matches;
  },
});


// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case MatrixConstants.FETCHED_MATCHES:
      console.log('in BOMMatcherStore:FETCHED_MATCHES');
      BOMMatcherStore.setState( {matches: payload.action.matches} );
      break;
  }
});

module.exports = BOMMatcherStore;
