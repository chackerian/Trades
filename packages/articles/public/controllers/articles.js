'use strict';
// angular.module('mean.articles', ['flow']);
angular.module('mean.articles', ['uiGmapgoogle-maps'])
    .controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
    });
angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Global', 'Articles',
  function($scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.hasAuthorization = function(article) {
      if (!article || !article.user) return false;
      return $scope.global.isAdmin || article.user._id === $scope.global.user._id;
    }; 

    $scope.sizes = [
      {name:'6 inches'},
      {name:'6.5 inches'},
      {name:'7 inches'},
      {name:'7.5 inches'},
      {name:'8 inches'},
      {name:'8.5 inches'},
      {name:'9 inches'},
      {name:'9.5 inches'},
      {name:'10 inches'},
      {name:'10.5 inches'},
      {name:'11 inches'},
      {name:'11.5 inches'},
      {name:'12 inches'},
      {name:'12.5 inches'},
      {name:'13 inches'},
      {name:'13.5 inches'},
      {name:'14 inches'},
      {name:'14.5 inches'},
      {name:'15 inches'},
      {name:'15.5 inches'},
      {name:'16 inches'}
    ]; 

    $scope.items = [
      {name:'Shoes', selected:'true'},
      {name:'Electronics'},
      {name:'Clothing'}
    ];   

    $scope.shoes = [
      {name:'Addidas', selected:'true'},
      {name:'Asic'},
      {name:'Converse'},
      {name:'Ewing Athletics'},
      {name:'Fila'},
      {name:'Jordan'},
      {name:'Li Ning'},
      {name:'New Balance'},
      {name:'Nike'},
      {name:'Puma'},
      {name:'Radii'},
      {name:'Reebok'},
      {name:'Sperry'},
      {name:'Saucony'},
      {name:'Supras'},
      {name:'Timberland'},
      {name:'Toms'},
      {name:'Vans'},
      {name:'Other'}
    ];

    $scope.electronics = [
      {name:'Phone', selected:'true'},
      {name:'Tablet'},
      {name:'Headphones'},
      {name:'Game Console'},
      {name:'Games'},
      {name:'Laptop'},
      {name:'Other'}
    ];

    $scope.clothings = [
      {name:'Hat', selected:'true'},
      {name:'Shirt'},
      {name:'Hoodie'},
      {name:'Pants'},
      {name:'Belts'},
      {name:'Other'}
    ];


    $scope.create = function(isValid) {
      if (isValid) {
        var article = new Articles({
          title: this.title,
          content: this.content,
          price: this.price

        });
        article.$save(function(response) {
          //Changes path to the assigned
          $location.path('articles/' + response._id);
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

        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function(response) {
          $location.path('articles');
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
          $location.path('articles/' + article._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Articles.query(function(articles) {
        $scope.articles = articles;
      });
    };

    $scope.findOne = function() {
      Articles.get({
        articleId: $stateParams.articleId
      }, function(article) {
        $scope.article = article;
      });
    };
  }
]);