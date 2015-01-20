'use strict';

angular.module('mean.message').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('message example page', {
      url: '/message/example',
      templateUrl: 'message/views/index.html'
    });
  }
]);
