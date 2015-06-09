var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('../../../node_modules/object-assign');


var CHANGE_EVENT = 'CHANGE';

var TempStore = assign({}, EventEmitter.prototype, {
  state: {
    distributors: [
      {
          "id": "1111",
          "name": "Allied",
          "show": "true",
          "results_matched": "54"
      },
      {
          "id": "1112",
          "name": "Arrow",
          "show": "true",
          "results_matched": "23"
      },
      {
          "id": "1113",
          "name": "AvNet",
          "show": "true",
          "results_matched": "36"
      },
      {
          "id": "1114",
          "name": "Digikey",
          "show": "true",
          "results_matched": "19"
      },
      {
          "id": "1115",
          "name": "element",
          "show": "true",
          "results_matched": "31"
      },
      {
          "id": "1116",
          "name": "Farnell",
          "show": "true",
          "results_matched": "42"
      },
      {
          "id": "1117",
          "name": "Future",
          "show": "true",
          "results_matched": "17"
      },
      {
          "id": "1118",
          "name": "Grainger",
          "show": "true",
          "results_matched": "13"
      },
      {
          "id": "1119",
          "name": "Heilind",
          "show": "true",
          "results_matched": "51"
      },
      {
          "id": "1120",
          "name": "Master",
          "show": "true",
          "results_matched": "43"
      },
      {
          "id": "1121",
          "name": "Mouser",
          "show": "true",
          "results_matched": "61"
      },
      {
          "id": "1122",
          "name": "Newark",
          "show": "true",
          "results_matched": "57"
      },
      {
          "id": "1123",
          "name": "PEI Genesis",
          "show": "true",
          "results_matched": "18"
      },
      {
          "id": "1124",
          "name": "Powell",
          "show": "true",
          "results_matched": "12"
      },
      {
          "id": "1125",
          "name": "RS Components",
          "show": "true",
          "results_matched": "9"
      },
      {
          "id": "1126",
          "name": "Rutronik",
          "show": "true",
          "results_matched": "16"
      },
      {
          "id": "1127",
          "name": "Sager",
          "show": "true",
          "results_matched": "34"
      },
      {
          "id": "1128",
          "name": "TTI",
          "show": "true",
          "results_matched": "22"
      },
      {
          "id": "1129",
          "name": "Verical",
          "show": "true",
          "results_matched": "6"
      },
      {
          "id": "1130",
          "name": "Zoro",
          "show": "true",
          "results_matched": "19"
      }
    ],
    
    results: {
  "meta_info": {
    "number_of_pages": "4",
    "this_page_number": "1",
    "bom_id": "200"
  },
  "bom_parts": {
    "11401N": {
      "manufacturer": "Illinois Capacitor",
      "bom_part_id": "232",
      "required_quantity": "4800",
      "target_price": "1.07",
      "recommended_distributor": "1111",
      "distributors": {
        "1111": {
          "name": "Allied",
          "best_match": {
            "part_number": "11401N",
            "manufacturer": "Illinois Capacitor",
            "qoh": "3400",
            "moq": "50",
            "price": "1.22"
          }
        },
        "1112": {
          "name": "Arrow",
          "best_match": {
            "part_number": "11401N",
            "manufacturer": "Illinois Capacitor",
            "qoh": "3250",
            "moq": "10",
            "price": "1.31"
          }
        },
        "1113": {
          "name": "AvNet",
          "best_match": {
            "part_number": "11401N-R",
            "manufacturer": "AMD",
            "qoh": "5690",
            "moq": "50",
            "price": "1.11"
          }
        },
        "1114": {
          "name": "Digi-Key",
          "best_match": {
            "part_number": "11401N-R",
            "manufacturer": "AMD",
            "qoh": "1100",
            "moq": "50",
            "price": "1.19"
          }
        },
        "1115": {
          "name": "element",
          "best_match": {}
        },
        "1116": {
          "name": "Farnell",
          "best_match": {
            "part_number": "1140-1",
            "manufacturer": "Motorola",
            "qoh": "17645",
            "moq": "1",
            "price": "1.34"
          }
        },
        "1117": {
          "name": "Future",
          "best_match": {
            "part_number": "11401N",
            "manufacturer": "Illinois Capacitor",
            "qoh": "1625",
            "moq": "10",
            "price": "1.34"
          }
        },
        "1118": {
          "name": "Grainger",
          "best_match": {
            "part_number": "1140-1LT",
            "manufacturer": "AMD",
            "qoh": "4395",
            "moq": "50",
            "price": "1.94"
          }
        }
      }
    },
    "TMS-5847": {
      "manufacturer": "TI",
      "bom_part_id": "234",
      "required_quantity": "1150",
      "target_price": "0.50",
      "recommended_distributor": "1111",
      "distributors": {
        "1111": {
          "name": "Allied",
          "best_match": {
            "part_number": "TMS-5847",
            "manufacturer": "TI",
            "qoh": "4500",
            "moq": "100",
            "price": "0.47"
          }
        },
        "1112": {
          "name": "Arrow",
          "best_match": {
            "part_number": "TMS-5847-R",
            "manufacturer": "Motorola",
            "qoh": "6655",
            "moq": "10",
            "price": "0.75"
          }
        },
        "1113": {
          "name": "AvNet",
          "best_match": {
            "part_number": "TMS5847A",
            "manufacturer": "AMD",
            "qoh": "18000",
            "moq": "100",
            "price": "0.62"
          }
        },
        "1114": {
          "name": "Digi-Key",
          "best_match": {
            "part_number": "5847",
            "manufacturer": "Illinois Capacitor",
            "qoh": "9833",
            "moq": "1",
            "price": "0.81"
          }
        },
        "1115": {
          "name": "element",
          "best_match": {}
        },
        "1116": {
          "name": "Farnell",
          "best_match": {
            "part_number": "TMS-5847S",
            "manufacturer": "AMD",
            "qoh": "7266",
            "moq": "5",
            "price": "0.78"
          }
        },
        "1117": {
          "name": "Future",
          "best_match": {
            "part_number": "T-5487",
            "manufacturer": "CBC",
            "qoh": "3782",
            "moq": "1",
            "price": "0.69"
          }
        },
        "1118": {
          "name": "Grainger",
          "best_match": {
            "part_number": "T5847",
            "manufacturer": "Intel",
            "qoh": "8992",
            "moq": "50",
            "price": "0.72"
          }
        }
      }
    },
    "R2D2": {
      "manufacturer": "Lucas Electronics",
      "bom_part_id": "235",
      "required_quantity": "9000",
      "target_price": "2.11",
      "recommended_distributor": "1112",
      "distributors": {
        "1111": {
          "name": "Allied",
          "best_match": {
            "part_number": "R2D2",
            "manufacturer": "Lucas",
            "qoh": "1522",
            "moq": "10",
            "price": "2.76"
          }
        },
        "1112": {
          "name": "Arrow",
          "best_match": {
            "part_number": "R2D2",
            "manufacturer": "Lucas Elec.",
            "qoh": "12453",
            "moq": "100",
            "price": "2.04"
          }
        },
        "1113": {
          "name": "AvNet",
          "best_match": {
            "part_number": "R2DTOO",
            "manufacturer": "AMD",
            "qoh": "1034",
            "moq": "10",
            "price": "2.62"
          }
        },
        "1114": {
          "name": "Digi-Key",
          "best_match": {
            "part_number": "ARE2DEE2",
            "manufacturer": "LMF",
            "qoh": "23627",
            "moq": "100",
            "price": "3.01"
          }
        },
        "1115": {
          "name": "element",
          "best_match": {}
        },
        "1116": {
          "name": "Farnell",
          "best_match": {
            "part_number": "RTWODTOO",
            "manufacturer": "TI",
            "qoh": "4837",
            "moq": "50",
            "price": "2.93"
          }
        },
        "1117": {
          "name": "Future",
          "best_match": {
            "part_number": "R2D2",
            "manufacturer": "Lucas",
            "qoh": "3726",
            "moq": "1",
            "price": "2.91"
          }
        },
        "1118": {
          "name": "Grainger",
          "best_match": {
            "part_number": "R2D2TOO",
            "manufacturer": "Intel",
            "qoh": "7167",
            "moq": "3540",
            "price": "3.22"
          }
        }
      }
    }
  }
}   
  },

  setState(obj) {
    assign(this.state, obj);
    this.emit(CHANGE_EVENT);
  },

  getState() {
    return this.state;
  },

  getResults() {
    return this.state.results;
  },

  getDistributors() {
    return this.state.distributors;
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});


// Register for Actions

AppDispatcher.register(function(payload){
  // switch (payload.action.actionType) {
  //   case ???Constants.???:
  //     BOMStore.setState( {???: payload.action.???} );
  //     break;
  // }
});

module.exports = TempStore;
