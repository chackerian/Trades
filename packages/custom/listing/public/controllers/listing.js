'use strict';
// angular.module('mean.listings', ['flow']);
angular.module('mean.listing').controller('ListingController', ['$scope', '$stateParams', '$location', 'Global', 'Listing',
  function($scope, $stateParams, $location, Global, Listing) {
    $scope.global = Global;

    $scope.hasAuthorization = function(listing) {
      if (!listing || !listing.user) return false;
      return $scope.global.isAdmin || listing.user._id === $scope.global.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var listing = new Listing({
          title: this.title,
          content: this.content,
          price: this.price

        });
        listing.$save(function(response) {
          //Changes path to the assigned
          $location.path('listing/' + response._id);
        });

        this.title = '';
        this.content = '';
        this.price = '';

      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(listing) {
      if (listing) {
        listing.$remove();

        for (var i in $scope.listing) {
          if ($scope.listing[i] === listing) {
            $scope.listing.splice(i, 1);
          }
        }
      } else {
        $scope.listing.$remove(function(response) {
          $location.path('listing');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var listing = $scope.listing;
        if (!listing.updated) {
          listing.updated = [];
        }
        listing.updated.push(new Date().getTime());

        listing.$update(function() {
          $location.path('listing/' + listing._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Listing.query(function(listing) {
        $scope.listing = listing;
      });
    };

    $scope.findOne = function() {
      Listing.get({
        listingId: $stateParams.listingId
      }, function(listing) {
        $scope.listing = listing;
      });
    };
  }
]);



angular.module('mean.listing').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});
