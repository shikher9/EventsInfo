/**
 * Created by shikh on 28-Dec-16.
 */

"use strict"

app.controller("EventDetailsController", function ($scope, EventDataService) {

    $scope.sortorder = "name";


    EventDataService.getEvent(EventDataService.currentEvent, function (data) {
        $scope.event = data;
    });
    
    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        if (session.upVoteCount > 0) {
            session.upVoteCount--;
        }
    };


});
