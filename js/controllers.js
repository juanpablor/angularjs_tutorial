var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('DataController', ['$scope', '$http', function($scope, $http) {
  $http.get('data.json').success(function(data) {
    $scope.artists = data;
    console.log($scope.artists)
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
    	$scope.prevItem = Number($routeParams.itemId)-1;
    }
    else {
    	$scope.prevItem = $scope.artists.length-1;
    }
    if ($routeParams.itemId < $scope.artists.length-1) {
    	$scope.nextItem = Number($routeParams.itemId)+1;
    }
    else {
    	$scope.nextItem = $routeParams.itemId.length-1;
    }
  });
}]);