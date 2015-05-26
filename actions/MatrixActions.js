var AppDispatcher = require('../dispatcher/AppDispatcher');
var MatrixConstants  = require('../constants/MatrixConstants');
var APIutils      = require('../utils/APIutils');
var $             = require('jquery');

var MatrixActions = {

  getBOMParts: function(bom_id) {
    // Get parts from uploaded BOM
    $.ajax({
      type: "GET",
      url: window.API + 'boms/' + bom_id + '/parts',
      success: function(data) {
        // when data from API returns, dispatch an action to be picked up by store
        AppDispatcher.handleServerAction(
          {
            actionType: MatrixConstants.FETCHED_BOM_PARTS,
            parts: data
          }
        )
      }
    });
  },

  getBOMMatches: function(bom_id) {
    // Get parts from uploaded BOM
    $.ajax({
      type: "GET",
      url: window.API + 'boms/' + bom_id + '/matches',
      success: function(data) {
        // when data from API returns, dispatch an action to be picked up by store
        AppDispatcher.handleServerAction(
          {
            actionType: MatrixConstants.FETCHED_MATCHES,
            matches: data
          }
        )
      }
    });
  },


};

module.exports = MatrixActions;