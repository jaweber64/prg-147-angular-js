/**
 * Created by jaWeber on 11/13/16.
 */

app.directive('mowInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/mowinfo.html'
    };
});