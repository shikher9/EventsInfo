/**
 * Created by shikh on 30-Dec-16.
 */


"use strict";

app.directive("eventTile", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/templates/directives/eventTile.html",
        scope: {
            event: "=eventData"
            
        } //isolate scope
    }
});