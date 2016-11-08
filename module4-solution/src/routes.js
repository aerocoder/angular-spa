(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/categories/templates/home.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories/templates/categories.html',
        controller: 'CategoriesComponentController as categoriesList',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items/{id}?category',
        templateUrl: 'src/items/templates/items.html',
        controller: 'ItemsComponentController as itemDetail',
        resolve: {
          items: ['$stateParams','MenuDataService',
                function($stateParams, MenuDataService) {
                  var id = $stateParams.id;
                  var cat = $stateParams.category;
                  return MenuDataService.getItemsForCategory(cat)
                    .then(function(data) {
                      return data;
                    });
                  // return MenuDataService.getItemsForCategory(cat);
                }]
        }
      })
  }

})();
