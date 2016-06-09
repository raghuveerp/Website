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
        $scope.input =  ['Hello my friend!^2000 My name is Raghuveer.^2500\nCurrently working at Apple,^1500 yeah baby ;-)^2000\n'
            + 'I\'m a tools developer by profession and^2000\n'
            + 'web development believer by heart^500.^500.^500.^2000\n'
            + 'Food is my love,^2000 scotch is my weakness,^2000\nlistening music makes me happy^2000 and ^2000\n'
            + 'exploring new places gives me pleasure.^2000'];
    }]);
