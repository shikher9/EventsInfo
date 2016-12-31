/**
 * Created by shikh on 29-Dec-16.
 */

"use strict";

app.factory("EventDataService", function ($http, $log) {
    return {
        currentEvent: 1,
        getEvent: function (id, successcb) {
            var url = "/data/event/" + id;
            $http({method: 'GET', url: url}).then(function successCallback(response) {
                //executed for status code between 200 and 299.
                successcb(response.data);
            }, function errorCallback(response) {
                $log.error("Error while fetching event details with event id : " + id + " - status " + response.status + " " + response.statusText);
            });
        },
        getEvents: function (successcb) {
            $http({method: 'GET', url: '/data/events'}).then(function successCallback(response) {
                //executed for status code between 200 and 299.
                successcb(response.data);
            }, function errorCallback(response) {
                $log.error("Error while fetching all events - status " + response.status + " " + response.statusText);
            });
        }
    }
});