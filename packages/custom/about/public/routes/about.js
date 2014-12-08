'use strict';

angular.module('mean.about').config(['$stateProvider',
  function($stateProvider) {
  	$stateProvider.state('learn', {
      url: '/about',
      templateUrl: 'about/views/index.html'
    });

  	$stateProvider.state('learn.faq', {
      url: '/about/faq',
      templateUrl: 'about/views/faq.html'
    });

    $stateProvider.state('learn.safety', {
      url: '/about/safety',
      templateUrl: 'about/views/safety.html'
    });

    $stateProvider.state('learn.report', {
      url: '/about/report',
      templateUrl: 'about/views/report.html'
    });

    $stateProvider.state('learn.terms', {
      url: '/about/terms',
      templateUrl: 'about/views/terms.html'
    });
  }
]);
