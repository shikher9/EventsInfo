/**
 * Created by shikh on 30-Dec-16.
 */

"use strict";

app.controller("EventsController", function ($rootScope, $scope, EventDataService) {

    EventDataService.getEvents(function (data) {
        $scope.events = data.events;
    });

    $scope.goToEventDetails = function (id) {
        window.location = "#/eventDetails";
        EventDataService.currentEvent = id;
    };
});