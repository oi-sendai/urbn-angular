var EditProfileCtrl = angular.module('EditProfileCtrl', []);

EditProfileCtrl.controller('EditProfileCtrl', function($rootScope, $scope, $http, $q, $routeParams, $firebase
    ,AccountFactory
    ) {
    // $scope.beer = $routeParams.beerID || false;
    // $scope.editing = false;
    // $scope.beerData = {};
    // $scope.ales = 'ales';
    $scope.profile = {}
    $scope.profile.info = 'Talk about yourself';

    var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

    $scope.init = function(){
        console.log('init', $rootScope.firebaseUser)
        // var user = $rootScope.firebaseUser;
        AccountFactory.user().then(function(data){
            console.log('dat', data.val());
            user =  data.val();
            $scope.username = user.username;
            console.log(user.profile.info)
            $scope.profile.info = user.profile.info;
        });
        // $scope.username = user.username;
        // console.log(user)
    }
    $scope.init();

    $scope.updateInfo = function(){
        console.log('working');
        var info = $scope.profile.info; 
        AccountFactory.updateInfo(info);
    }

});