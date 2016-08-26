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
        'ui.bootstrap',
        'raghuveer.blogs'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/main.html',
                controller: 'MainController',
                controllerAs: 'main',
                title: 'Home'
            })
            .when('/about', {
                templateUrl: 'view/about.html',
                controller: 'AboutController',
                controllerAs: 'about',
                title : 'About Me'
            })
            .when('/resume', {
                templateUrl: 'view/resume.html',
                controller: 'ResumeController',
                controllerAs: 'resume',
                title: 'Resume'
            })
            .when('/contact', {
                templateUrl: 'view/contact.html',
                controller: 'ContactController',
                controllerAs: 'contact',
                title : 'Contact Me'
            })
            .when('/blog', {
                templateUrl: 'view/blog.html',
                controller: 'BlogController',
                controllerAs: 'blog',
                title: 'Blog'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
