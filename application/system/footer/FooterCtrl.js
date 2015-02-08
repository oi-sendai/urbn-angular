var FooterCtrl = angular.module('FooterCtrl', []);

FooterCtrl.controller('FooterCtrl', function($rootScope, $scope){ //, angularFire, angularFireAuth) { 

    $scope.copyleft = 'careersuici.de';

    // $rootScope.baseUrl = 'https://brilliant-fire-7870.firebaseio.com/';
    // var authRef = new Firebase($rootScope.baseUrl);
    // $rootScope.auth = $firebase(authRef);

    $scope.thing = 'load';
});