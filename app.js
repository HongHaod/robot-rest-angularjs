(function() {
  var app = angular.module("robotConsole", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/robot/:robotName", {
        templateUrl: "robot.html",
        controller: "RobotController"
      })
      .otherwise({redirectTo: "/main"});
  });
  
}());