angular.module('raghuveer')
    .directive('typedjs', function ($location) {
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
                        typeSpeed: 5,
                        backDelay: 100,
                        contentType: "text",
                        showCursor: true,
                        loop: false,
                        cursorChar: "|",
                        callback: function(){
                            $location.path("/about");
                        }
                    };

                $(function () {
                    $("#typedtext").typed(options);
                });
            }
        };
    });
