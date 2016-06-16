'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('ResumeController', function ($scope, $timeout, $interval) {

        var fillBars = function () {
            $('.bar').each(function () {
                var bar     = $(this);
                var percent = bar.attr('data-percent');
                bar.find('.progress').css('width', percent + '%').html('<span>' + percent + '</span>');
            });
        };

        $timeout(fillBars, 500);

        var randomize = function () {
            var checked = {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false
            };

            _.each(_.sample(_.keys(checked), 3), function (value) {
                checked[value] = true;
            });

            $scope.checked = checked;
        };

        randomize();
        $interval(randomize, 10000);
    });
