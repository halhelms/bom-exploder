// I hold models based on distributors

var AppDispatcher         = require('../dispatcher/AppDispatcher');
var EventEmitter          = require('events').EventEmitter;
var DistributorsConstants = require('../constants/DistributorsConstants');
var assign                = require('../node_modules/object-assign');

var CHANGE_EVENT = 'change';

var DistributorsStore = assign({}, EventEmitter.prototype, {
  state: {
    distributors_fetched: false,
    distributors: [],
    filters: {
      by_distributors: true,
      by_all: true,
      by_quoting: true
    }
  },

  setState(obj) {
    assign(this.state, obj);
    this.emit(CHANGE_EVENT);
  },

  putInState(obj) {
    assign(this.state, obj);
  },

  filter(by, bool) {
    this.state.filters[by] = bool;
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getDistributor(distributor_id) {
    this.state.distributors.forEach(function(distributor) {
      if (distributor.distributor_id === distributor_id) {
        return distributor;
      }
    });
    return null;
  },

  getDistributors() {
    return this.state.distributors;
  },
});


// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case DistributorsConstants.FETCHED_DISTRIBUTORS:
      DistributorsStore.setState({distributors: payload.action.distributors});
      // payload.action.distributors.forEach(function(distributor) {
      //   var aDistributor = {};
      //   aDistributor[distributor.distributor_id] = distributor;
      //   DistributorsStore.putInState(aDistributor);
      // });
      // DistributorsStore.emit(CHANGE_EVENT);
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
