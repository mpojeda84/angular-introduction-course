'use strict';

angular.module('myApp', [])

.controller('appCtrl', ['$scope', function($scope) {

    $scope.helloMessage = "Hello Cat!!";

    $scope.name = "Maikel";

    $scope.passenger = {
        name:"Maikel",
        age: 31
    }

    $scope.makeOlder = function(){
        $scope.passenger.age++;
    }

}]);


