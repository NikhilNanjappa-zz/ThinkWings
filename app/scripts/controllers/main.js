'use strict';

/**
 * @ngdoc function
 * @name flightTwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flightTwApp
 */
angular.module('flightTwApp')
  .controller('MainCtrl', function ($scope, $http) {
  	//Fetch the data
    $http.get('/scripts/controllers/flights.json').then(function(response) {
		$scope.flight_details = response.data.flight_data;
		console.log($scope.flight_details);
	});
                  
  $scope.lower_price_bound = 0;
  $scope.upper_price_bound = 39000;

  $scope.dummy_dates = ["1st Jan 2012", "20th Jan 2012", "13th Feb 2013"];
  
  $scope.priceRange = function(item) {
    return (parseInt(item.cost) >= $scope.lower_price_bound && parseInt(item.cost) <= $scope.upper_price_bound);
  };

  });
