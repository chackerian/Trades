'use strict';

angular.module('mean.about').controller('AboutController', ['$scope', 'Global', 'About',
  function($scope, Global, About) {
    $scope.global = Global;
    $scope.package = {
      name: 'about'
    };
  }
]);
