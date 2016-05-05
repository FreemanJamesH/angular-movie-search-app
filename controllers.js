movieApp.controller('resultsController', ['$scope', '$resource', function($scope, $resource){

  $scope.view = {};

  $scope.omdbAPI = $resource('http://www.omdbapi.com/?');

  $scope.omdbResults = $scope.omdbAPI.get({t: 'The Matrix'})


}])
