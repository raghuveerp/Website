/**
 * Created by raghuveer on 6/1/16.
 */

angular.module('raghuveer')
    .controller('defaultController', function ($scope, $location, $route) {
        var getYear = function () {
            return new Date().getFullYear();
        };

        $scope.date = getYear();
        $scope.$route = $route;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });