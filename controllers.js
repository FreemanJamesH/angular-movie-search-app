movieApp.controller('resultsController', ['$scope', '$resource', 'mathService', function($scope, $resource, mathService) {

  $scope.view = {};
  console.log('Search input: ' + $scope.searchInput)

  $scope.omdbAPI = $resource('http://www.omdbapi.com/?');

  $scope.omdbCall = function() {

    $scope.omdbAPI.get({
      s: $scope.searchInput,
      tomatoes: true
    }).$promise.then(function(results) {
      $scope.results = results.Search;
      console.log(results.Search);

    })
  }

}])

movieApp.controller('movieController', ['$scope', '$routeParams', '$resource', function($scope, $routeParams, $resource){

  $scope.view = {};
  $scope.view.imdbid = $routeParams.imdbid;

  $scope.omdbAPI = $resource('http://www.omdbapi.com/?');

  $scope.omdbCall = $scope.omdbAPI.get({i:$scope.view.imdbid,
                                        tomatoes: true,
                                        plot: 'full'
                                        }).$promise.then(function(results) {
      $scope.movie = results;
      console.log(results)
    })


console.log('movieController initialized!' + $scope.view.imdbid)

}])
