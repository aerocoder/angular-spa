(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsComponentController', ItemsComponentController)

  ItemsComponentController.$inject = ['items'];
  function ItemsComponentController(items) {
    var itemDetail = this;
    itemDetail.items = items;
  }

})();
