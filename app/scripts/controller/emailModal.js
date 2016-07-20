/**
 * Created by raghuveer on 7/19/16.
 */


'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('EmailModalController', function ($scope, $uibModalInstance) {
        $scope.send = function () {
            $uibModalInstance.close($scope);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    });
