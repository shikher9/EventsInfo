/**
 * Created by shikh on 28-Dec-16.
 */

"use strict";


var app = angular.module("app", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/addEvent",
        {
            templateUrl: 'templates/AddEvent.html',
            controller: "EditEventController"
        }).when("/eventDetails",
        {
            templateUrl: 'templates/EventDetails.html',
            controller: "EventDetailsController"
        }).when("/events",
        {
            templateUrl: 'templates/Events.html',
            controller: "EventsController"
        }).otherwise(
        {
            redirectTo: '/events'
        }
    );

});

