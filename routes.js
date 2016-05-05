movieApp.config(function($routeProvider){

  $routeProvider

  .when('/results', {
    templateUrl: 'pages/results.html',
    controller: 'resultsController'
  })
})
