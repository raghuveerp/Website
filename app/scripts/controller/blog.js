'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .controller('BlogController', function ($scope) {
        var accordian = function () {

            var toggleSpeed = 300;
            $('.toggle h3.active + .toggle-content').show();

            $('.toggle h3 span').on("click", function (event) {
                event.stopPropagation();
            });

            $('.toggle h3').on("click", function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next('.toggle-content').stop(true, true).slideUp(toggleSpeed);
                } else {
                    $(this).addClass('active');
                    $(this).next('.toggle-content').stop(true, true).slideDown(toggleSpeed);

                    //accordion
                    if ($(this).parents('.toggle-group').hasClass('accordion')) {
                        $(this).parent().siblings().find('h3').removeClass('active');
                        $(this).parent().siblings().find('.toggle-content').stop(true, true).slideUp(toggleSpeed);
                    }
                }
                return false;
            });
        }

        accordian();
    });
