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
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'view/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .when('/resume', {
                templateUrl: 'view/resume.html',
                controller: 'ResumeController',
                controllerAs: 'resume'
            })
            .when('/contact', {
                templateUrl: 'view/contact.html',
                controller: 'ContactController',
                controllerAs: 'contact'
            })
            .when('/blog', {
                templateUrl: 'view/blog.html',
                controller: 'BlogController',
                controllerAs: 'blog'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
