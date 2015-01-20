'use strict';

angular.module('mean.message').controller('MessageController', ['$scope', 'Global', 'Message',
  function($scope, Global, Message) {
    $scope.global = Global;
    $scope.package = {
      name: 'message'
    };
  }
]);
