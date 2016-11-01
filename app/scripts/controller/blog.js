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
            // {
            //     title: 'CMPE 275: Setting up environment',
            //     content: 'This blog was written for class CMPE 275 under Prof. Kevin Chang, on how to setup initial environment for this course.',
            //     keyword: 'Setting-Up-Environment',
            //     date: 'Feb 4, 2009'
            // }

            {
                title : 'Sher-Meri-Shayari ...',
                content : 'This is my attempt to express myself in the form of shayari .. ',
                keyword : 'Shayari',
                date : 'October 31, 2016'
            }
        ];

    });
