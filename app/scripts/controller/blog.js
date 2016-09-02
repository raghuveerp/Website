'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('BlogController', function ($scope) {
        $scope.oneAtATime = true;

        $scope.blogs = [
            {
                title: 'Blog Heading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam commodi cupiditate dolores nam quos temporibus, vitae?',
                keyword: 'blog1'
            },
            {
                title: 'Another Blog Heading',
                content: 'Commodi facere odit perspiciatis ratione, reiciendis suscipit voluptas. Atque labore natus veritatis voluptatum!',
                keyword: 'blog1'
            }
        ];

    });
