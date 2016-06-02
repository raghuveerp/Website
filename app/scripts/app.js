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
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/main/view/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'scripts/about/view/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .when('/resume', {
                templateUrl: 'scripts/resume/view/resume.html',
                controller: 'ResumeController',
                controllerAs: 'resume'
            })
            .when('/contact', {
                templateUrl: 'scripts/contact/view/contact.html',
                controller: 'ContactController',
                controllerAs: 'contact'
            })
            .when('/blog', {
                templateUrl: 'scripts/blogs/view/blog.html',
                controller: 'BlogController',
                controllerAs: 'blog'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
