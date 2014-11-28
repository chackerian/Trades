'use strict';

angular.module('mean.listing').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('listing example page', {
      url: '/listing/example',
      templateUrl: 'listing/views/index.html'
    });
  }
]);
