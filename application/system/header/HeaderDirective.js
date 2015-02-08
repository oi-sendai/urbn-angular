var HeaderDirective = angular.module('HeaderDirective', []);

HeaderDirective.directive('systemheader', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'application/system/header/header.html'
    };
});
