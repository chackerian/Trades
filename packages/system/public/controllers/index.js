'use strict';
angular.module('mean.system').
  controller('IndexController',
   ['$scope',
    'Global',
     function($scope, Global, HeaderController) {
      $scope.global = Global;
      $scope.randomcolor = Math.floor(Math.random()*16777215).toString(16);
      $scope.a = document.getElementsByClassName('snoop');
    }
]);        
