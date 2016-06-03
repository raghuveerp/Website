'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('MainController', [ '$scope', '$location', function ($scope, $location) {
        $scope.input =  ['Hola!!^2000 I am Raghuveer^2500 currently working at Apple.^2000\n'
            + 'A release tools developer by profession & ^2000\n'
            + 'web development enthusiast by heart^500.^500.^500.^2000\n'
            + 'Food and Scotch are my weakness,^2000 \nmusic is my motivation^2000 and ^2000\n'
            + 'exploring new places is my passion.^2000\n'];
    }]);
