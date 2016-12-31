/**
 * Created by shikh on 28-Dec-16.
 */


app.filter("myUppercaseFilter", function () {
    return function (input) {
        input = input.toUpperCase();
        return input;
    }
});