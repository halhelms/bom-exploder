var AppDispatcher    = require('../../../../dispatcher/AppDispatcher');
var ResultsConstants = require('../../../../constants/results/constants');
// var APIutils         = require('../utils/APIutils');
// var $                = require('jquery');

var Actions = {

  exitAllMatchesForBomPartFromDistributorMode() {
    AppDispatcher.handleViewAction(
      {
        actionType: ResultsConstants.EXIT_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_MODE_DO,
        data: {}
      }
    );
  },

};

module.exports = Actions;