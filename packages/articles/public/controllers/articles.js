'use strict';
// angular.module('mean.articles', ['flow']);
angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Global', 'Articles',
  function($scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.hasAuthorization = function(article) {
      if (!article || !article.user) return false;
      return $scope.global.isAdmin || article.user._id === $scope.global.user._id;
    };

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



angular.module('mean.articles').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});
