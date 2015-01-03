'use strict';

angular.module('mean.listing').factory('Listings', [ 'resource',
	function($resource) {
		return $resource('listings/:listingId', {
			listingId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
	]);
