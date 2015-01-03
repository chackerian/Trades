'use strict';

//Setting up route
angular.module('mean.listing').config(['$stateProvider',
  function($stateProvider) {
    // Check if the user is connected
    var checkLoggedin = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') $timeout(deferred.resolve);

        // Not Authenticated
        else {
          $timeout(deferred.reject);
          $location.url('/login');
        }
      });

      return deferred.promise;
    };

    // states for my app
    $stateProvider
      .state('all listing', {
        url: '/listing',
        templateUrl: 'listing/views/list.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('create listing', {
        url: '/listing/create',
        templateUrl: 'listing/views/create.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('edit listing', {
        url: '/listing/:listingId/edit',
        templateUrl: 'listing/views/edit.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('listing by id', {
        url: '/listing/:listingId',
        templateUrl: 'listing/views/view.html',
        resolve: {
          loggedin: checkLoggedin
        }
      });
  }
]);
