'use strict';

angular.module('mean.system').
  controller('IndexController', ['$scope', 'Global',
    function($scope, Global) {
      $scope.global = Global;
      // $scope.sites = {
      //   'makeapoint':{
      //     'name':'makeapoint',
      //     'text':'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
      //     'author':'Linnovate',
      //     'link':'http://www.linnovate.net',
      //     'image':'/theme/assets/img/makeapoint.png'
      //   },
      //   'intranet':{
      //     'name':'Intranet',
      //     'text':'Enterpintranet',
      //     'author':'qed42',
      //     'link':'http://www.qed42.com',
      //     'image':''
      //   }
      // };
      $scope.boxes = ['/system/assets/img/box1.png','/system/assets/img/box1.png'];
      $scope.shoes = ['/theme/assets/img/nike-1.jpg','/theme/assets/img/nike-2.jpg'];
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
