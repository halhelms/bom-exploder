var AppDispatcher       = require('../dispatcher/AppDispatcher');
var BOMResultsConstants = require('../constantsBOMResultsConstants');
var APIutils            = require('../utils/APIutils');
var $                   = require('jquery');

var BOMResultsActions = {

  fetchBOMResults(bom_id) {
    $.ajax({
      type: "GET",
      url: window.API + 'boms/' + bom_id + '/matches',
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: BOMResultsConstants.FETCHED_MATCHES,
            matches: data
          }
        )
      }
    });    
  },

};

module.exports = BOMResultsActions;