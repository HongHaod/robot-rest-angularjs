(function() {
  var robotApp = function($http) {
    var baseUrl = "http://52.64.180.163:8080/robot/";
    //var baseUrl = "http://52.64.229.21:8080/robot/";
    
    //var baseUrl = "http://hao-lb-2039032581.ap-southeast-2.elb.amazonaws.com:80/robot/";
    var listRobot = function() {
      return $http.get(baseUrl + "list")
        .then(function(response) {
          return response.data;
        });
    };
    var report = function(robotName) {
      return $http.get(baseUrl + "report/" + robotName)
        .then(function(response) {
          return response.data;
        });
    };
    var turn = function(robotName, direction) {
      var data = {
        name: 'test',
      };
      return $http.put(baseUrl + "change/" + robotName + "/" + direction, data)
        .then(function(response) {
          return response.data;
        });
    };
    var cpuStress = function(robotName) {
      for (i = 0; i < 20; i++) {
        $http.get(baseUrl + "report/" + robotName);
      }
      return report(robotName);
    };

    return {
      listRobot: listRobot,
      report: report,
      turn: turn,
      cpuStress : cpuStress
    };
  };

  var module = angular.module("robotConsole");
  module.factory("robotApp", robotApp);

}());