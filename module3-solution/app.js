(function() {
  'use strict';

<<<<<<< HEAD
  angular.module('NarrowItDown', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .constant('menuAPIUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json')
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrowDownList = this;

    narrowDownList.narrowListTerm = "";
    narrowDownList.searchTerm = "";

    narrowDownList.removeItem = function(index) {
      narrowDownList.found.splice(index, 1);
    };

    narrowDownList.narrowDown = function() {
      narrowDownList.narrowListTerm = narrowDownList.searchTerm;

      if (narrowDownList.narrowListTerm === "") {
        narrowDownList.message = "Nothing found";
      } else {
        narrowDownList.message = "";

        MenuSearchService.getMatchedMenuItems(narrowDownList.narrowListTerm)
          .then(function(result) {
            if (result.length) {
              narrowDownList.found = result;
            } else {
              narrowDownList.found = [];
              narrowDownList.message = "Nothing found";
            }
          })
          .catch(function(error) {
            console.log("Something went wrong!");
          });
      }

    };

  }

  function FoundItems() {
    var ddo = {
      templateUrl: 'items.html',
      scope: {
        items: '<',
        onRemove: "&",
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'narrowList',
      bindToController: true,
      // link: FoundItemsDirectiveLink
    };

    return ddo;
  }

  function NarrowItDownDirectiveController() {
    var narrowList = this;
  }

  // function FoundItemsDirectiveLink(scope, element, attrs, controller) {
  // }

  MenuSearchService.$inject = ['$http', 'menuAPIUrl']
  function MenuSearchService($http, menuAPIUrl) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {

        return $http({
          method: 'GET',
          url: menuAPIUrl,
          // params: { params1: "value1"}
        }).then(function(result) {
          var menuItems = result.data.menu_items;

          var foundItems = menuItems.filter(function(menu) {
            var lowerDesc = menu.description.toLowerCase();
            var lowerTerm = searchTerm.toLowerCase()
            return lowerDesc.indexOf(lowerTerm) !== -1;
          });

          return foundItems;
        });
    };
  }

=======
  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var shoppingList = this;

    shoppingList.listItems = ShoppingListCheckOffService.getToBuy();

    shoppingList.removeFromToBuyList = function(index) {
      ShoppingListCheckOffService.removeFromToBuyList(index);
    };
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.boughtItems = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
      {
        name: "Cookies",
        quantity: 10
      },
      {
        name: "Peanuts",
        quantity: 4
      },
      {
        name: "Tuna flakes",
        quantity: 8
      },
      {
        name: "Dark chocolate",
        quantity: 5
      },
      {
        name: "2 Lt Coke",
        quantity: 6
      },
      {
        name: "Muffins",
        quantity: 12
      },
    ];

    var bought = [];

    service.getToBuy = function() {
      return toBuy;
    };

    service.getBoughtList = function() {
      return bought;
    };

    service.removeFromToBuyList = function(index) {
      var boughtItem = toBuy[index];
      toBuy.splice(index, 1);
      bought.push(boughtItem);
    };

  }
>>>>>>> 0dbbd332cc093edd72ed42115fc1a48c1434f90c
})();
