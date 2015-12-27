'use strict';

console.log("Initializing Main Module ...");

// Declare app level module
angular.module('myApp', [
  'ngRoute',
  'myApp.passengerList',
  'myApp.editPassenger'
]).

    config(['$routeProvider', function($routeProvider) {

      console.log("Executing App Config");

      $routeProvider.when('/home', {
        templateUrl: 'home/home.html'
      });

      $routeProvider.when('/passengers/edit', {
        templateUrl: 'edit-passenger/edit-passenger.html',
        controller: 'editPassengerCtrl'
      });

      $routeProvider.when('/passengers/list', {
        templateUrl: 'passenger-list/passenger-list.html',
        controller: 'passengerListCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/home'});

    }]);
