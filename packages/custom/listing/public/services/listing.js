'use strict';

angular.module('mean.listing').factory('Listing', ['$resource',
  function($resource) {
   return $resource('articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
