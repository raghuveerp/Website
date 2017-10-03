/**
 * Created by raghuveer on 6/15/16.
 */

var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function() {
    return $window._;
}]);