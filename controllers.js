movieApp.controller('resultsController', ['$scope', '$resource', 'mathService', function($scope, $resource, mathService) {

  $scope.view = {};
  console.log('Search input: ' + $scope.searchInput)

  $scope.omdbAPI = $resource('http://www.omdbapi.com/?');

  $scope.omdbCall = function() {

    $scope.omdbAPI.get({
      s: $scope.searchInput
    }).$promise.then(function(results) {
      $scope.results = results.Search;
      console.log(results.Search);

    })
  }

}])
