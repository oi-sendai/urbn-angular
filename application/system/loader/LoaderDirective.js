angular.module('SystemApp')
	.directive('systemloader', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'application/system/loader/loader.html'
    };
});
