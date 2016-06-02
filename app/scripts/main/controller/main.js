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
        $scope.input = ['Hello Stranger..^2000 \nYou are the one stalking Raghuveer. ^2000 \nSomething something'];
    }]);
