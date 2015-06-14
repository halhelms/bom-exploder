var AppDispatcher    = require('../dispatcher/AppDispatcher');
var ResultsConstants = require('../constants/results/constants');
var APIutils         = require('../utils/APIutils');
var $                = require('jquery');

var Actions = {

  name() {
    $.ajax({
      type: "GET",
      url: window.API + '',
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: Constants.,
            bom: data
          }
        )
      }
    });
  },

};

module.exports = Actions;