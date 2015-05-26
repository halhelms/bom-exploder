// I hold models based on distributors

var AppDispatcher         = require('../dispatcher/AppDispatcher');
var EventEmitter          = require('events').EventEmitter;
var DistributorsConstants = require('../constants/DistributorsConstants');
var assign                = require('../node_modules/object-assign');


var CHANGE_EVENT = 'change';

var DistributorsStore = assign({}, EventEmitter.prototype, {
  state: {
    distributors: []
  },

  setState: function(obj) {
    assign(this.state, obj);
    this.emit(CHANGE_EVENT);
  },

  putInState: function(obj) {
    assign(this.state, obj);
  },

  addChangeListener: function( callback ) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener: function( callback ) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getDistributor: function(distributor_id) {
    return this.state[distributor_id];
  },
});


// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case DistributorsConstants.FETCHED_DISTRIBUTORS:
      payload.action.distributors.forEach(function(distributor) {
        var aDistributor = {};
        aDistributor[distributor.distributor_id] = distributor;
        DistributorsStore.putInState(aDistributor);
      });
      DistributorsStore.emit(CHANGE_EVENT);
      break;

    case DistributorsConstants.SHOWN_RESULTS_FOR_DISTRIBUTOR:
      var distributor = DistributorsStore.getDistributor(payload.action.distributor_id);
      distributor.show = true;
      DistributorsStore.emit(CHANGE_EVENT);
      break;

    case DistributorsConstants.HID_RESULTS_FOR_DISTRIBUTOR:
      var distributor = DistributorsStore.getDistributor(payload.action.distributor_id);
      distributor.show = false;
      DistributorsStore.emit(CHANGE_EVENT);
  }
});

module.exports = DistributorsStore;
