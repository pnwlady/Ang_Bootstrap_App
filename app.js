(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = [
      {
        name: 'Awesome Multi-touch Keyboard',
        price: 250.00,
        description: 'keyboard that can touch stuff',
        reviews: [
          {
            stars: 5,
            body: "I love this",
            author: "jane@nelson.com"
          },
          {
            stars: 4,
            body: "pretty good keyboard",
            author: "ham@beef.com"
          },
          {
            stars: 1,
            body: "meh",
            author: "tim@hater.com"
          }
        ]
      }
    ];
  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
})();

var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'blah',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Emerald',
    price: 3.95,
    description: 'hah',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Quartz',
    price: 1.95,
    description: 'ah',
    canPurchase: true,
    soldOut: false
  }
]
