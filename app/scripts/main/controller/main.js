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
        $scope.input =  ['Hello my friend!^2000\n'
            + 'Welcome to the world of Raghuveer^500.^500.^500.^2000\n'
            + 'I am Team Lead/Sr. Software Engineer at Apple.^2000\n'
            + 'A tools developer for release automation by profession^500.^500.^500. and^1000\n'
            + 'web development enthusiast by heart^500.^500.^500.^2000\n'
            + 'Food and Scotch are my weakness,^2000\n'
            + 'while travelling to new places is my passion.^2000\n'
            + 'Welcome to know me^500.^500.^500. Welcome to raghuveer.us '];
    }]);
