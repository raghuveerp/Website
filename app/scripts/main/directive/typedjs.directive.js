angular.module('raghuveer')
    .directive('typedjs', function () {
        return {
            restrict: 'E',
            scope: {
                strings: '='
            },
            template: '<span id="typedtext"></span>',
            link: function ($scope, $element, $attrs) {
                var options = {
                    strings: $scope.strings,
                    typeSpeed: 100,
                    backDelay: 2000,
                    contentType: "text",
                    showCursor: true,
                    loop: true,
                    cursorChar: "|"
                };

                $(function () {
                    $("#typedtext").typed(options);
                });
            }
        };
    });
