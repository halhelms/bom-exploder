var AppDispatcher = require('../dispatcher/AppDispatcher');
var ???Constants  = require('../constants/???Constants');
var APIutils      = require('../utils/APIutils');
var $             = require('jquery');

var ???Actions = {

  get???: function(???) {
    $.ajax({
      type: "GET",
      url: window.API + '???/' + ???,
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: ???Constants.???,
            bom: data
          }
        )
      }
    });
  },

};

module.exports = ???Actions;