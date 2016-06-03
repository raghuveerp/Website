/**
 * Created by raghuveer on 6/1/16.
 */

angular.module('raghuveer')
    .controller('defaultController', function ($scope, $location) {
        var getYear = function () {
            return new Date().getFullYear();
        };

        $scope.date = getYear();

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });