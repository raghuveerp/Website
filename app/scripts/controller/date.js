/**
 * Created by raghuveer on 6/1/16.
 */

angular.module('raghuveer')
    .controller('dateController', function ($scope) {
        var getYear = function () {
            return new Date().getFullYear();
        };

        $scope.date = getYear();
    });