movieApp.config(function($routeProvider){

  $routeProvider

  .when('/results', {
    templateUrl: 'pages/results.htm',
    controller: 'resultsController'
  })
})
