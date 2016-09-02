'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('MainController', function ($scope) {
        $scope.input =  ['Hello my friend!^1000 My name is Raghuveer.^1500\nCurrently working at Apple,^1000 yeah baby ;-)^1000\n'
            + 'I\'m a tools developer by profession and^1000\n'
            + 'believes in web development at heart^200.^200.^200.^1000\n'
            + 'Food is my love,^1000 scotch is my weakness,^1000\nlistening music makes me happy^1000 and ^1000\n'
            + 'exploring new places gives me pleasure.^1000'];
    });
