(function() {

  angular.module("robotConsole")
    .controller("RobotController", function($scope, $http, $routeParams, robotApp) {

      var robot = this;
      $scope.robot = robot;
      robot.robotName = $routeParams.robotName;

      var onComplete = function(data) {
        robot.data = data;
      };

      var onError = function(reason) {
        robot.error = "Could not fetch data: " + reason;
      };
      
      var report = function() {
        robotApp.report(robot.robotName).then(onComplete, onError);
      }
      
      $scope.refresh = function() {
        report();
      }
      
      $scope.turn = function(direction) {
        robotApp.turn(robot.robotName, direction).then(onComplete, onError);
      }
      
      $scope.cpuStress = function() {
        robotApp.cpuStress(robot.robotName).then(onComplete, onError);
      }
      
      report();


      robot.title = "Robot " + robot.robotName;


    });
}());