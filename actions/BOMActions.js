var AppDispatcher = require('../dispatcher/AppDispatcher');
var BOMConstants  = require('../constants/BOMConstants');
var APIutils      = require('../utils/APIutils');
var $             = require('jquery');

var BOMActions = {

  getBOM: function(bom_id) {
    // retrieve the BOM from the API
    $.ajax({
      type: "GET",
      url: window.API + 'boms/' + bom_id,
      success: function(data) {
        // now that I have the BOM from the API, let me dispatch an event 
        AppDispatcher.handleServerAction(
          {
            actionType: BOMConstants.FETCHED_BOM,
            bom: data
          }
        )
      }
    });
  },

  getBOMs: function() {
    $.ajax({
      type: "GET",
      url: window.API + 'boms',
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: BOMConstants.FETCHED_BOMS,
            boms: data
          }
        )
      }
    });
  },

  getMatchesForBOM: function(bom_id) {
    $.ajax({
      type: "GET",
      url: window.API + 'boms/' + bom_id + '/matches',
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: BOMConstants.FETCHED_MATCHES,
            matches: data
          }
        )
      }
    });    
  },
  
};

module.exports = BOMActions;