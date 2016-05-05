movieApp.directive('someDirective', ['mathService', function(mathService){
  return {
    scope: {},
    templateUrl: './templates/main_template.html',
    link: function(scope,element,attrs){
      scope.hello = "hello!";
      alert(mathService.addTwo(1,2));
    }
  }
}]);
