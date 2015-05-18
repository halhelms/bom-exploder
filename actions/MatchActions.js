var AppDispatcher = require('../dispatcher/AppDispatcher');
var MatchConstants  = require('../constants/MatchConstants');
var APIutils      = require('../utils/APIutils');
var $             = require('jquery');

var MatchActions = {

  getTodo: function(todo) {
    $.ajax({
      type: "GET",
      url: window.API + 'todo/' + todo,
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: MatchConstants.TODO,
            data: data
          }
        )
      }
    });
  },

};

module.exports = MatchActions;