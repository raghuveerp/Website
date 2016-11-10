'use strict';

/**
 * @ngdoc overview
 * @name raghuveer
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
    .module('raghuveer', [
        'ngRoute',
        'ngTouch',
        'ngAnimate',
        'ngMap',
        'underscore',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/main.html',
                controller: 'defaultController',
                title: 'Home'
            })
            .when('/about', {
                templateUrl: 'view/about.html',
                controller: 'defaultController',
                title: 'About Me'
            })
            .when('/resume', {
                templateUrl: 'view/resume.html',
                controller: 'defaultController',
                title: 'Resume'
            })
            .when('/contact', {
                templateUrl: 'view/contact.html',
                controller: 'defaultController',
                title: 'Contact Me'
            })
            .when('/blog', {
                templateUrl: 'view/blog.html',
                controller: 'defaultController',
                title: 'Blogs'
            })
            .when('/blog/:keyword', {
                templateUrl: function (urlAttribute) {
                    return 'view/blogs/' + urlAttribute.keyword + '.html'
                },
                controller: 'defaultController',
                title: 'Blogs',
                activetab: 'blogs'
            })
            .when('/home', {
                redirectTo: '/'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
