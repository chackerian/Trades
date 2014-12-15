'use strict';

angular.module('mean.listing').controller('ListingController', ['$scope', '$stateParams', '$location', 'Global', 'Listing',
  function($scope, $stateParams, $location, Global, Listing) {
    $scope.global = Global;
    $scope.package = {
      name: 'listing'
    };

    $scope.hasAuthorization = function(article) {
      if (!article || !article.user) return false;
      return $scope.global.isAdmin || article.user._id === $scope.global.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var listing = new Listing({
          title: this.title,
          content: this.content,
          price: this.price

        });
        listing.$save(function(response) {
          $location.path('listing/' + response._id);
        });

        this.title = '';
        this.content = '';
        this.price = '';

      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(article) {
      if (article) {
        article.$remove();

        for (var i in $scope.listing) {
          if ($scope.listing[i] === article) {
            $scope.listing.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function(response) {
          $location.path('listing');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var article = $scope.article;
        if (!article.updated) {
          article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
          $location.path('listing/' + article._id);
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
        articleId: $stateParams.articleId
      }, function(article) {
        $scope.article = article;
      });
    };
  }
]);

