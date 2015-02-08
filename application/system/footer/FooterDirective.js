var FooterDirective = angular.module('FooterDirective', []);

FooterDirective.directive( 'systemfooter', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'application/system/footer/footer.html'
    };
});