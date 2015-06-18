'use strict'
let AppDispatcher           = require('../dispatcher/AppDispatcher');
let EventEmitter            = require('events').EventEmitter;
let assign                  = require('../../../node_modules/object-assign');
EventEmitter.prototype.vars = {};

let ResultsConstants        = require('../constants/results/constants');

let CHANGE_EVENT            = 'CHANGE';

let TempStore = assign({}, EventEmitter.prototype, {
  
  getEmailItem(id) {
    let found_inbox_item = null;
    this.state.inbox_items.forEach((inbox_item, i) => {
      if (parseInt(inbox_item.id) === parseInt(id)) {
        found_inbox_item = inbox_item; 
      }
    });
    return found_inbox_item;
  },

  getBom(id) {
    let found_bom = null;
    this.state.boms.forEach((bom, i) => {
      if (bom.id === id) {
        found_bom = bom;
      }
    });
    return found_bom;
  },

  getBoms() {
    return this.state.boms;
  },

  getDistributorMatchesForBomPart() {
    return this.state.distributor_matches_for_bom_part;
  },

  getPercentSelected() {
    return this.state.percent_selected;
  },

  getTotalTargetPrice() {
    return this.state.total_target_price;
  },

  getTotalSelectedPrice() {
    return this.total_selected_price;
  },

  state: {
    percent_selected: 72,
    total_target_price: 131700,
    total_selected_price: 130650,

    distributor_matches_for_bom_part: {
      bom_part_id: '11401N',
      distributor_id: 1112,
      distributor_name: 'Arrow',
      matched_parts: [
        {
          part_number: '1401N-i',
          manufacturer: 'Illinois Capacitor',
          description: 'Diurnal split capacitor',
          info_page: 'arrow.com/parts/1401N-i',
          quoted: true,
          qoh: 1800,
          moq: 1,
          price_breaks: [
            {
              from: 1,
              to: 10,
              price: 1.32
            },
            {
              from: 11,
              to: 100,
              price: 1.21              
            },
            {
              from: 101,
              to: 500,
              price: 1.16
            },
            {
              from: 501,
              to: 1000000,
              price: 1.08          
            }
          ]
        },
        {
          part_number: '1401-IA',
          manufacturer: 'AMD',
          description: 'Flux capacitor, bifurcated',
          info_page: 'arrow.com/parts/1401-IA',
          quoted: false,
          qoh: 6400,
          moq: 10,
          price_breaks: [
            {
              from: 10,
              to: 50,
              price: 1.61
            },
            {
              from: 51,
              to: 100,
              price: 1.48              
            },
            {
              from: 101,
              to: 250,
              price: 1.32
            },
            {
              from: 251,
              to: 500,
              price: 1.21          
            },
            {
              from: 501,
              to: 1000000,
              price: 1.17          
            }
          ]
        }
      ]
    },

    boms: [
      {
        "name": "iPhone 6 Charging Station",
        "id": "10000",
        "description": "Charging station for iPhone 6/6+",
        "created_on": "12 July 2015",
        "last_updated_on": "12 July 2015",
        "new_quotes": "true"
      },
      {
        "name": "Bacon Toaster",
        "id": "20000",
        "description": "Make bacon as easily as you make toast",
        "created_on": "23 July 2015",
        "last_updated_on": "26 July 2015",
        "new_quotes": "false"
      },
      {
        "name": "Time Traveler",
        "id": "30000",
        "description": "Time travel device",
        "created_on": "2 August 2015",
        "last_updated_on": "9 August 2015",
        "new_quotes": "false"
      }
    ],
    
    inbox_items: [
      {id: 101, author: 'bob@allied.com', subject: 'Quote for Part 11401N for iPhone Charging Station', quote_price: 1.19 , contents: 'We can supply that part for $1.19 ea. in quantities of 100 or more'},
      {id: 102, author: 'marissa@avnet.com', subject: 'Quote for Part R2D2 for iPhone Charging Station', quote_price: 3.74 , contents: 'We have a similar part. Same specs but commercial grade for $3.74. QOH: 1,500. MOQ: 50'},
      {id: 103, author: 'andrea@future.com', subject: 'Quote for Part R2D2 for iPhone Charging Station', quote_price: 3.42 , contents: 'We are backordered on that part, but expect shipment in 2 weeks. If you can wait on that, we can sell it to you for $3.42.'}
    ],
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
            "price": "1.22",
            "quoted" : "true"
          }
        },
        "1112": {
          "name": "Arrow",
          "best_match": {
            "part_number": "11401N",
            "manufacturer": "Illinois Capacitor",
            "qoh": "3250",
            "moq": "10",
            "price": "1.31",
            "quoted" : "false"
          }
        },
        "1113": {
          "name": "AvNet",
          "best_match": {
            "part_number": "11401N-R",
            "manufacturer": "AMD",
            "qoh": "5690",
            "moq": "50",
            "price": "1.11",
            "quoted" : "false"
          }
        },
        "1114": {
          "name": "Digi-Key",
          "best_match": {
            "part_number": "11401N-R",
            "manufacturer": "AMD",
            "qoh": "1100",
            "moq": "50",
            "price": "1.19",
            "quoted" : "true"
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
            "price": "1.34",
            "quoted" : "false"
          }
        },
        "1117": {
          "name": "Future",
          "best_match": {
            "part_number": "11401N",
            "manufacturer": "Illinois Capacitor",
            "qoh": "1625",
            "moq": "10",
            "price": "1.34",
            "quoted" : "true"
          }
        },
        "1118": {
          "name": "Grainger",
          "best_match": {
            "part_number": "1140-1LT",
            "manufacturer": "AMD",
            "qoh": "4395",
            "moq": "50",
            "price": "1.94",
            "quoted" : "false"
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
            "price": "0.47",
            "quoted" : "false"
          }
        },
        "1112": {
          "name": "Arrow",
          "best_match": {
            "part_number": "TMS-5847-R",
            "manufacturer": "Motorola",
            "qoh": "6655",
            "moq": "10",
            "price": "0.75",
            "quoted" : "false"
          }
        },
        "1113": {
          "name": "AvNet",
          "best_match": {
            "part_number": "TMS5847A",
            "manufacturer": "AMD",
            "qoh": "18000",
            "moq": "100",
            "price": "0.62",
            "quoted" : "false"
          }
        },
        "1114": {
          "name": "Digi-Key",
          "best_match": {
            "part_number": "5847",
            "manufacturer": "Illinois Capacitor",
            "qoh": "9833",
            "moq": "1",
            "price": "0.81",
            "quoted" : "false"
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
            "price": "0.78",
            "quoted" : "false"
          }
        },
        "1117": {
          "name": "Future",
          "best_match": {
            "part_number": "T-5487",
            "manufacturer": "CBC",
            "qoh": "3782",
            "moq": "1",
            "price": "0.69",
            "quoted" : "false"
          }
        },
        "1118": {
          "name": "Grainger",
          "best_match": {
            "part_number": "T5847",
            "manufacturer": "Intel",
            "qoh": "8992",
            "moq": "50",
            "price": "0.72",
            "quoted" : "false"
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
            "price": "2.76",
            "quoted" : "false"
          }
        },
        "1112": {
          "name": "Arrow",
          "best_match": {
            "part_number": "R2D2",
            "manufacturer": "Lucas Elec.",
            "qoh": "12453",
            "moq": "100",
            "price": "2.04",
            "quoted" : "true"
          }
        },
        "1113": {
          "name": "AvNet",
          "best_match": {
            "part_number": "R2DTOO",
            "manufacturer": "AMD",
            "qoh": "1034",
            "moq": "10",
            "price": "2.62",
            "quoted" : "false"
          }
        },
        "1114": {
          "name": "Digi-Key",
          "best_match": {
            "part_number": "ARE2DEE2",
            "manufacturer": "LMF",
            "qoh": "23627",
            "moq": "100",
            "price": "3.01",
            "quoted" : "true"
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
            "price": "2.93",
            "quoted" : "false"
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
            "price": "3.22",
            "quoted" : "false"
          }
        }
      }
    }
  }
}   
  },

  setState(obj) {
    assign(this.state, obj);
    this.emit(CHANGE_EVENT, obj);
  },

  getState() {
    return this.state;
  },

  getInboxItems() {
    return this.state.inbox_items;
  },

  getResults() {
    assign(this.vars, {msg: 'hello'});
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

  getDistributorName(distributor_id) {
    let found_distributor_name = "no name found";
    this.state.distributors.forEach((distributor, i) => {
      if (parseInt(distributor_id) === parseInt(distributor.id)) {
        found_distributor_name = distributor.name;
      }
    });
    return found_distributor_name;
  },

});

// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case ResultsConstants.SET_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_DO:
      payload.action.data.subsequent_action = ResultsConstants.SET_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_DONE;
      payload.action.data.distributor_name = TempStore.getDistributorName(payload.action.data.distributor_id);
      TempStore.setState({action_data: payload.action.data});
      break;

    case ResultsConstants.EXIT_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_MODE_DO:
      console.log('in TempStore EXIT_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_MODE_DO');
      payload.action.data.subsequent_action = ResultsConstants.EXIT_ALL_MATCHES_FOR_BOM_PART_FROM_DISTRIBUTOR_MODE_DONE;
      TempStore.setState({action_data: payload.action.data});
      break;
  }
});

module.exports = TempStore;
