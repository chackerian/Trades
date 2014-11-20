
angular.module('mean.system').
  controller('IndexController', ['$scope', 'Global',
    function($scope, Global) {
      $scope.global = Global;
      $scope.boxes = ['/system/assets/img/box1.png','/system/assets/img/box1.png'];
      $scope.shoes = ['/theme/assets/img/nike-1.jpg','/theme/assets/img/nike-2.jpg'];

      // $( '.sidebar' ).simpleSidebar({
      //       settings: {
      //             opener: '#open-sb',
      //             wrapper: '.wrapper',
      //             animation: {
      //                   duration: 500,
      //                   easing: 'easeOutQuint'
      //             }
      //       },
      //       sidebar: {
      //             align: 'left',
      //             width: 200,
      //             closingLinks: 'a',
      //       }
      // });
      // $scope.$watch(function () {
      //   for (var i = 0; i < $scope.sites.length; i+=1) {
      //     if ($scope.sites[i].active) {
      //       return $scope.sites[i];
      //     }
      //   }
      // }, function (currentSlide, previousSlide) {
      //   if (currentSlide !== previousSlide) {
      //     console.log('currentSlide:', currentSlide);
      //   }
      // });
    }
]);
angular.module('mean.system').
      directive('color', ['$scope', function($scope) {
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
                              //replace: true,
                              // transclude: true,
                              // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
                              //link: function($scope, iElm, iAttrs, controller) {
                                    /* jshint ignore:start */
                                   // $scope.randomColor = Math.floor(Math.random()*16777215).toString(16);
                                    /* jshint ignore:end */
                              //angular.element('<span class="glyphicon glyphicon-usd rand"></span>')[0].css('color', '#' + randomColor;);

                        //}
                   };
                  }]);         
