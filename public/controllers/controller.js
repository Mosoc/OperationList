var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
function($scope, $http) { console.log("Hello World from controller");
$http.get('/operationlist').success(function(response){
    console.log("RESPONSE")
    $scope.operationlist = response;
});

$scope.addOperation = function(){
  console.log($scope.operation);  
};

}]); 