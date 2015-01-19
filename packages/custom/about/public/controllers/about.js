'use strict';

angular.module('mean.about')
.controller('AboutController', ['$scope', 'toastr', 'Global', 'About',
	function($scope, toastr, Global, About) {
		$scope.global = Global;
		$scope.package = {
			name: 'about'
		};

		$scope.fire = function () {
			toastr.success('Hello world!', 'Toastr fun!');
		};
	}
	]);
