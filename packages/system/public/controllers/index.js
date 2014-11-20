
angular.module('mean.system').
  controller('IndexController', ['$scope', 'Global',
    function($scope, Global) {
      $scope.global = Global;
      $scope.boxes = ['/system/assets/img/box1.png','/system/assets/img/box1.png'];
      $scope.shoes = ['/theme/assets/img/nike-1.jpg','/theme/assets/img/nike-2.jpg'];
      $scope.randomcolor = Math.floor(Math.random()*16777215).toString(16);
      var a = document.getElementsByClassName("")
      $scope.place = angular.element(a)[0]
      element.addClass(.square);

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
