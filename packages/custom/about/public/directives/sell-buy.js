'use strict';

angular.module('mean.about')
.directive('sell', function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			iElement.css({
				color:'red'
			});
		}
	};
});

angular.module('mean.about')
.directive('buy', function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			iElement.css({
				color:'blue'
			});
		}
	};
});