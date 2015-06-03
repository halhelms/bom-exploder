var AppDispatcher  = require('../dispatcher/AppDispatcher');
var LoginConstants = require('../constants/LoginConstants');
var APIutils       = require('../utils/APIutils');
var $              = require('jquery');


var successfulLogin = function(data) {
  AppDispatcher.handleServerAction(
    {
      actionType: LoginConstants.SUCCESSFUL_LOGIN,
      user_info: {userId: 1, firstName: "Hatem", lastName: "Jaber"}
    }
  );
  window.location.href = "/#/hello"; 
}

var failedLogin = function(data) {
  window.location.href = "/#/goodbye";
}

var LoginActions = {

  attemptLogin: function(data) {
    $.ajax({
      type: "POST",
      url: window.API + 'login',
      data: {username: data.username, password: data.password},
      success: function(data) {
        if ( data.user_id !== "" ) {
          successfulLogin(data);
        } else {
          failedLogin(data);
        }
      },
      error: function() {
        failedLogin(data);
      }
    });

  },
};

module.exports = LoginActions;