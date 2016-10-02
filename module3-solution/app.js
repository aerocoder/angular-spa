(function() {
  'use strict';

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
})();
