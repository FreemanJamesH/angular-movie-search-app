movieApp.config(function($routeProvider){

  $routeProvider

  .when('/results', {
    templateUrl: 'pages/results.html',
    controller: 'resultsController'
  })

  .when('/movie/:imdbid', {
    templateUrl: 'pages/movie.html',
    controller: 'movieController'
  })
})
