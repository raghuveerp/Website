/**
 * Created by raghuveer on 6/1/16.
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
    .controller('defaultController', function ($scope, $location, $route, $timeout, $interval, $location) {
        var getYear = function () {
            return new Date().getFullYear();
        };

        $scope.date   = getYear();
        $scope.$route = $route;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        // Front Page Type JS Input
        $scope.input = ['Hello my friend!^1000 My name is Raghuveer.^1500\nCurrently working at Apple,^1000 yeah baby ;-)^1000\n'
        + 'I\'m a tools developer by profession and^1000\n'
        + 'web development enthusiast at heart^200.^200.^200.^1000\n'
        + 'Food is my love,^1000 scotch is my weakness,^1000\nlistening music makes me happy^1000 and ^1000\n'
        + 'exploring new places gives me pleasure.^800'];

        // For debugging & testing purpose
        // $scope.input = ['Hello my friend'];

        // Resume
        var fillBars = function () {
            $('.bar').each(function () {
                var bar     = $(this);
                var percent = bar.attr('data-percent');
                bar.find('.progress').css('width', percent + '%').html('<span>' + percent + '</span>');
            });
        };

        $timeout(fillBars, 500);

        // About Page
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
        $interval(randomize, 12000);

        // Blog
        $scope.oneAtATime   = true;
        $scope.blogsBaseURL = $location.$$absUrl;

        $scope.blogs = [
            {
                title: 'Sher O\'Shayari',
                content: 'This is my attempt to express myself in the form of shayari .. ',
                keyword: 'Shayari',
                date: 'October 31, 2016'
            }
        ];

        // Resume URL

        $scope.resumeURL = "resources/Raghuveer.Resume.pdf";

    });