angular.module('raghuveer')
    .directive('typedjs', function () {
        return {
            restrict: 'E',
            scope: {
                strings: '=',
                options: '='
            },
            template: '<span id="typedtext"></span>',
            link: function ($scope, $element, $attrs) {
                var options = $scope.options || {
                        strings: $scope.strings,
                        typeSpeed: 25,
                        backDelay: 100,
                        contentType: "text",
                        showCursor: true,
                        loop: false,
                        cursorChar: "|"
                    };

                $(function () {
                    $("#typedtext").typed(options);
                });
            }
        };
    });
