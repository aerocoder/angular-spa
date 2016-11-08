(function() {
  'use strict';

  angular.module('Data')
  .constant('menuBaseAPIUrl', 'https://davids-restaurant.herokuapp.com/')
  .service('MenuDataService', MenuDataService)

  function MenuDataService($http, menuBaseAPIUrl) {
    var service = this;

    service.getAllCategories = function(searchTerm) {

        return $http({
          method: 'GET',
          url: menuBaseAPIUrl + "categories.json",
        }).then(function(result) {
          return result.data;
        });
    };

    service.getItemsForCategory = function(categoryShortName) {

        return $http({
          method: 'GET',
          url: menuBaseAPIUrl + "menu_items.json?category=" + categoryShortName,
        }).then(function(result) {
          return result.data.menu_items;
        });
    };
  }

})();
