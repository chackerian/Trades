'use strict';

angular.module('mean.about').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('about example page', {
      url: '/about/example',
      templateUrl: 'about/views/index.html'
    });
  }
]);
