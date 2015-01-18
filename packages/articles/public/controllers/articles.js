'use strict';
// angular.module('mean.articles', ['flow']);
angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Global', 'Articles',
  function($scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.hasAuthorization = function(article) {
      if (!article || !article.user) return false;
      return $scope.global.isAdmin || article.user._id === $scope.global.user._id;
    }; 

    //  function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();

    //         reader.onload = function (e) {
    //             angular.element('#blah')[0].attr('src', e.target.result);
    //         };

    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    
    //  angular.element('#imgInp')[0].change(function(){
    //     readURL(this);
    // });

$scope.sizes = [
{name:'US - 6'},
{name:'US - 6.5'},
{name:'US - 7'},
{name:'US - 7.5'},
{name:'US - 8'},
{name:'US - 8.5'},
{name:'US - 9'},
{name:'US - 9.5'},
{name:'US - 10'},
{name:'US - 10.5'},
{name:'US - 11'},
{name:'US - 11.5'},
{name:'US - 12'},
{name:'US - 2.5'},
{name:'US - 13'},
{name:'US - 13.5'},
{name:'US - 14'},
{name:'US - 14.5'},
{name:'US - 15'},
{name:'US - 15.5'},
{name:'US - 16'}
]; 

$scope.states = [
{name:'Alabama'},
{name:'Alaska'},
{name:'Arizona'},
{name:'Arkansas'},
{name:'California'},
{name:'Colorado'},
{name:'Connecticut'},
{name:'Deleware'},
{name:'Florida'},
{name:'Georgia'},
{name:'Hawaii'},
{name:'Idaho'},
{name:'Illinois'},
{name:'Indiana'},
{name:'Iowa'},
{name:'Kansas'},
{name:'Kentucky'},
{name:'Lousiana'},
{name:'Maine'},
{name:'Maryland'},
{name:'Massachusetts'},
{name:'Michigan'},
{name:'Minnesotta'},
{name:'Mississippi'},
{name:'Missouri'},
{name:'Montana'},
{name:'Nebraska'},
{name:'Nevada'},
{name:'New Hampshire'},
{name:'New Jersey'},
{name:'New Mexico'},
{name:'New York'},
{name:'North Carolina'},
{name:'North Dakota'},
{name:'Ohio'},
{name:'Oklahoma'},
{name:'Oregon'},
{name:'Pennsylvania'},
{name:'Rhode Island'},
{name:'South Carolina'},
{name:'South Dakota'},
{name:'Tennessee'},
{name:'Texas'},
{name:'Utah'},
{name:'Vermont'},
{name:'Virginia'},
{name:'Washington'},
{name:'West Virginia'},
{name:'Wisconsin'},
{name:'Wyoming'}
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

}
]);