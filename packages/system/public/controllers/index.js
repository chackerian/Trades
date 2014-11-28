'use strict';
angular.module('mean.system').
  controller('IndexController',
   ['$scope',
    'Global',
     function($scope, Global, HeaderController) {
      $scope.global = Global;
      $scope.boxes = ['/system/assets/img/box1.png','/system/assets/img/box1.png'];
      $scope.shoes = ['/theme/assets/img/nike-1.jpg','/theme/assets/img/nike-2.jpg'];
      $scope.randomcolor = Math.floor(Math.random()*16777215).toString(16);
      $scope.a = document.getElementsByClassName('snoop');
      $scope.names = ['Nike Force Sky High', 'Jordans Future', 'Camo Foams', 'Lebrons 11 Gamma Blue',
      'Flu Game 12', 'Space Jam 11'];
    }
]);        
