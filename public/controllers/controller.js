var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
function($scope, $http) { console.log("Hello World from controller");
$http.get('/operationlist');
    operation1 = {
        title: 'hekate',
        type: 'A',
        description: 'A-A-A'
    };
    operation2 = {
        title: 'odin',
        type: 'B',
        description: 'B-22-2B2'
    };
    
    operation3 = {
        title: 'inanna',
        type: 'C',
        description: '333-333-333'        
    };
    var operationlist = [operation1, operation2, operation3];
    $scope.operationlist = operationlist;
}]); 