'use strict';

angular.module('mean.listing').controller('ListingController', ['$scope', 'Global', 'Listing',
  function ($scope, Global, Listing) {
    $scope.global = Global;

    // $scope.hasAuthorization = function(listing) {
    // 	if (!listing || !listing.user) return false;
    // 	return $scope.global.isAdmin || listing.user._id === $scope.global.user._id;
    // }
    // $scope.create = function(isValid){
    // 	if (isValid) {
    // 		var listing = new Listings({
    			
    // 		})
    // 	}
    // }

    $scope.package = {
      name: 'listing'
    };
  }
]);
