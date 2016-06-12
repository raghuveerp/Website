'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('ResumeController', function ($scope, $timeout) {

        var fillBars = function () {
            $('.bar').each(function () {
                var bar     = $(this);
                var percent = bar.attr('data-percent');
                bar.find('.progress').css('width', percent + '%').html('<span>' + percent + '</span>');
            });
        };

        $timeout(fillBars, 500);
    });
