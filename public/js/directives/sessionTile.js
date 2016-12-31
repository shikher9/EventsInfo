/**
 * Created by shikh on 30-Dec-16.
 */


"use strict";

app.directive("sessionTile", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/templates/directives/sessionTile.html",
        scope: {
            upvote: "&",
            downvote: "&",
            session: "=sessionData"
        }
    }
});