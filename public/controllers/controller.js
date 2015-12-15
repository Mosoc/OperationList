var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
function($scope, $http) { console.log("Hello World from controller");

var refresh = function(){
    $http.get('/operationlist').success(function(response){
        console.log("RESPONSE");
        $scope.operationlist = response;
        $scope.operation ="";
    });
};

refresh();

$scope.addOperation = function(){
  console.log($scope.operation); 
  $http.post('/operationlist', $scope.operation).success(function(response){
      console.log(response);
      refresh();
  });
};

}]); 