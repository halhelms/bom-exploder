var $ = require('jquery');

var API = {
  getBuyerInfo: function(id) {
    $.get('http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/buyers/' + id, function(data) {
      BuyerActions.fetchedBuyerInfo(data);
    });
  },

  getBOMs: function(buyer_id) {
    $.get('http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/buyers/' + buyer_id + '/boms', function(data) {
      BOMActions.fetchedBOMs(data.boms);
    });
  },
};

module.exports = API;