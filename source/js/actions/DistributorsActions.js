var AppDispatcher = require('../dispatcher/AppDispatcher');
var DistributorsConstants  = require('../constants/DistributorsConstants');
var APIutils      = require('../utils/APIutils');
var $             = require('jquery');

var DistributorsActions = {

  fetchDistributorsForBOM: function(bom_id) {
    // Get distributors for this BOM from API
    $.ajax({
      type: "GET",
      url: window.API + 'boms/' + bom_id + '/distributors',
      success: function(data) {
        // when data from API returns, dispatch an action to be picked up by store
        AppDispatcher.handleServerAction(
          {
            actionType: DistributorsConstants.FETCHED_DISTRIBUTORS_FOR_BOM,
            distributors: data
          }
        );
      }
    });
  },

  fetchDistributors: function() {
    $.ajax({
      type: "GET",
      url: window.API + 'distributors',
      success: function(data) {
        console.log('success in DistributorsActions::fetchDistributors');
        // when data from API returns, dispatch an action to be picked up by store
        AppDispatcher.handleServerAction(
          {
            actionType: DistributorsConstants.FETCHED_DISTRIBUTORS,
            distributors: data
          }
        );
      }
    });
  },

  showResultsForDistributor: function(distributor_id) {
    AppDispatcher.handleViewAction(
      {
        actionType: DistributorsConstants.SHOWN_RESULTS_FOR_DISTRIBUTOR,
        distributor_id: distributor_id
      }
    );
  },

  hideResultsForDistributor: function(distributor_id) {
    AppDispatcher.handleViewAction(
      {
        actionType: DistributorsConstants.HID_RESULTS_FOR_DISTRIBUTOR,
        distributor_id: distributor_id
      }
    );
  },

};

module.exports = DistributorsActions;