'use strict';

angular.module('mean.listing').controller('ListingController', ['$scope', 'Global', 'Listing',
  function($scope, Global, Listing) {
    $scope.global = Global;
    $scope.package = {
      name: 'listing'
    };
  }
]);
