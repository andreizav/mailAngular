'use strict';

let app = angular.module('Mail', ["ui.router"])
.config(function ($stateProvider) {
    $stateProvider
     .state("inbox", {
         url:"/inbox",
         template: "<show-letters status='$ctrl.mainTitle'></show-letters>"
     })
    .state("sent", {
        url: "/sent",
        template: "<show-letters status='$ctrl.mainTitle'></show-letters>"
    })
})