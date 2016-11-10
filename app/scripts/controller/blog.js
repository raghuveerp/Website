'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .filter('escape', function () {
        return function (input) {
            if (input) {
                return window.encodeURIComponent(input);
            }
            return '';
        }
    })
    .controller('BlogController', function ($scope, $location) {
        $scope.oneAtATime   = true;
        $scope.blogsBaseURL = $location.$$absUrl;

        $scope.blogs = [
            {
                title : 'Sher O\'Shayari',
                content : 'This is my attempt to express myself in the form of shayari .. ',
                keyword : 'Shayari',
                date : 'October 31, 2016'
            }
        ];

    });
