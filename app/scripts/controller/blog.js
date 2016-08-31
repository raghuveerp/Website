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
        // $scope.oneAtATime = true;
        //
        // $scope.options = [{
        //     title : 'Startup Your First Project',
        //     body : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        //     keyword : 'blog1'
        // },{
        //     title : 'Build on Something Solid',
        //     body : 'There are many variations of passages of Lorem Ipsum available',
        //     keyword : 'blog1'
        // }];
        //
        // var accordian = function () {
        //
        //     var toggleSpeed = 300;
        //     $('.toggle h3.active ').show();
        //
        //     $('.toggle h3 span').on("click", function (event) {
        //         event.stopPropagation();
        //     });
        //
        //     $('.toggle h3').on("click", function () {
        //         if ($(this).hasClass('active')) {
        //             $(this).removeClass('active');
        //             $(this).next('.toggle-content').stop(true, true).slideUp(toggleSpeed);
        //         } else {
        //             $(this).addClass('active');
        //             $(this).next('.toggle-content').stop(true, true).slideDown(toggleSpeed);
        //
        //             //accordion
        //             if ($(this).parents('.toggle-group').hasClass('accordion')) {
        //                 $(this).parent().siblings().find('h3').removeClass('active');
        //                 $(this).parent().siblings().find('.toggle-content').stop(true, true).slideUp(toggleSpeed);
        //             }
        //         }
        //         return false;
        //     });
        // }
        //
        // accordian();




    })
    .controller('AccordionDemoCtrl', function($scope) {
        // $scope.groups = [
        //     {
        //         title: "Title 1",
        //         items: [{"item-title": "item 1"}, {"item-title": "item 2"}]
        //     },
        //     {
        //         title: "Title 2",
        //         items: [{"item-title": "item 3"}, {"item-title": "item 4"}]
        //     }
        // ];

        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

    });
