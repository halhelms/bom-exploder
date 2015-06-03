var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants  = require('../constants/CartConstants');
var APIutils      = require('../utils/APIutils');
var $             = require('jquery');

var CartActions = {

  getToDo: function(todo) {
    $.ajax({
      type: "GET",
      url: window.API + 'todo/' + todo,
      success: function(data) {
        AppDispatcher.handleServerAction(
          {
            actionType: CartConstants.todo,
            todo: data
          }
        )
      }
    });
  },

};

module.exports = CartActions;