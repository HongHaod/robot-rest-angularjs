(function() {

  angular.module("robotConsole")
    .controller("MainController", function($scope, $http, robotApp) {

      var main = this;
      $scope.main = main;

      var onComplete = function(data) {
        main.data = data;
      };

      var onError = function(reason) {
        main.error = "Could not fetch data.";
      };

      robotApp.listRobot().then(onComplete, onError);


      main.title = "Robot Console";


    });
}());