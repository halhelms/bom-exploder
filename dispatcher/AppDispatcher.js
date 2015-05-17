var Dispatcher = require('../flux/lib/Dispatcher');
var assign     = require('../node_modules/object-assign');

module.exports = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  },
});