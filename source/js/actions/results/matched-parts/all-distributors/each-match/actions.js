var AppDispatcher    = require('../../../../../dispatcher/AppDispatcher');
var ResultsConstants = require('../../../../../constants/results/constants');
// var APIutils         = require('../utils/APIutils');
// var $                = require('jquery');

var Actions = {

  setAllMatchesForBomPartFromDistributor(bom_part_number, distributor_id) {
    console.log('from within matched-parts/all-distributors/each-match/actions', bom_part_number, distributor_id)
    AppDispatcher.handleViewAction(
      {
        actionType: ResultsConstants.SET_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_DO,
        data: {
          bom_part_number: bom_part_number,
          distributor_id: distributor_id
        }
      }
    );
  },

};

module.exports = Actions;