angular.module('AngularForm', [$route])
  .$scope.reloadRoute = function() {
    $route.reload();
  }
