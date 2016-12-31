/**
 * Created by shikh on 28-Dec-16.
 */

"use strict";

app.controller("EditEventController", function ($scope) {

    $scope.saveEvent = function (event) {
        console.log(event);
    };

    $scope.cancelEvent = function (event) {
        window.location = "#/events";
    }
});