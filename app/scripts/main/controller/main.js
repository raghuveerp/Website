'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('MainController', [ '$scope', function ($scope) {
        $scope.input = ['Software Engineer..', 'Tools Developer..', 'Travel Enthusiast..', 'Food Lover..'];
    }]);
