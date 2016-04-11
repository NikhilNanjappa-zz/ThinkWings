'use strict';

/**
 * @ngdoc overview
 * @name flightTwApp
 * @description
 * # flightTwApp
 *
 * Main module of the application.
 */
angular
  .module('flightTwApp', [
    'ngRoute',
    'ngSanitize',
    'uiSlider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
