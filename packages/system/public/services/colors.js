angular.module('mean.system')
	.directive('color', ['$scope', function($scope) {
					// Runs during compile
					return {
						// name: '',
						// priority: 1,
						// terminal: true,
						// scope: {}, // {} = isolate, true = child, false/undefined = no change
						// controller: function($scope, $element, $attrs, $transclude) {},
						// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
						restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
						template: '<div class="square">HAHFHALJ</div>',
						// templateUrl: '',
						replace: true,
						// transclude: true,
						// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
						link: function($scope, element, attrs) {
							/* jshint ignore:start */
						$scope.randomColor = Math.floor(Math.random()*16777215).toString(16);
							/* jshint ignore:end */
	     			 		//angular.element('<span class="glyphicon glyphicon-usd rand"></span>')[0].css('color', '#' + randomColor;);

	     			 	}
	     			 };
	     			}]);		