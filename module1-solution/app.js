(function() {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenu = "";

    $scope.displayMessage = function() {
      if ($scope.lunchMenu === "") {
        $scope.message = "Please enter data first";
        return;
      }

      var items = $scope.lunchMenu.split(',').filter(function(food) {
        return food.trim().length > 0;
      });

      var numItems = items.length;

      if (numItems === 0) {
        $scope.message = "Please enter data first";
      } else if (numItems <= 3) {
        $scope.message = "Enjoy!";

      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
