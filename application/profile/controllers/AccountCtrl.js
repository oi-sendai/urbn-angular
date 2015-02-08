// var EditProfileCtrl = angular.module('EditProfileCtrl', []);

// EditProfileCtrl.controller('EditProfileCtrl', function($rootScope, $scope, $http, $q, $routeParams, $firebase
//     ,AccountFactory
//     ) {
//     // $scope.beer = $routeParams.beerID || false;
//     // $scope.editing = false;
//     // $scope.beerData = {};
//     // $scope.ales = 'ales';
//     $scope.profile = {}
//     $scope.profile.info = 'Talk about yourself';

//     var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

//     $scope.init = function(){
//         console.log('init', $rootScope.firebaseUser)
//         // var user = $rootScope.firebaseUser;
//         AccountFactory.user().then(function(data){
//             console.log('dat', data.val());
//             user =  data.val();
//             $scope.username = user.username;
//             console.log(user.profile.info)
//             $scope.profile.info = user.profile.info;
//         });
//         // $scope.username = user.username;
//         // console.log(user)
//     }
//     // $scope.init();

//     $scope.updateInfo = function(){
//         console.log('working');
//         var info = $scope.profile.info; 
//         AccountFactory.updateInfo(info);
//     }

// });

/*
 *@ProfileCtrl
*/
function AccountCtrl ($scope, $stateParams, user) { 
    $scope.user = user;
    $scope.uid  = user.uid;
    $scope.username = user.username;
    $scope.profile = user.profile;
    $scope.skills = _.map(user.skills);
}

angular.module('SystemApp').controller('AccountCtrl', AccountCtrl);


function AccountInterestCtrl ($scope, $stateParams, user, AccountFactory) { 
    $scope.user = user;
    $scope.uid  = user.uid;
    $scope.username = user.username;
    $scope.profile = user.profile;
    console.log(_.map(user.skills));
    $scope.interests = _.map(user.skills);

    var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

    $scope.init = function(){
        // console.log('init', $rootScope.firebaseUser)
        // var user = $rootScope.firebaseUser;
        AccountFactory.interests().then(function(data){
            console.log('dat', data.val());
            var interests =  data.val();
            interests = _.map(interests, function(value,key){
                return value
            });
            $scope.interests = interests;
        });
        // $scope.username = user.username;
        // console.log(user)
    }
    $scope.init(); 

    $scope.formData = {};

    $scope.interestData = {};

    $scope.editswitch =  false;


    $scope.updateInfo = function(){
        console.log('working');
        var info = $scope.profile.info; 
        AccountFactory.updateInfo(info);
    }

    $scope.addInterest = function(){
        var newInterest = {"name":$scope.interestData.newItem, "tooltip":""};
        alert(newInterest);
        $scope.interests.push(newInterest);
        AccountFactory.addInterest(newInterest);
        $scope.interestData = {}
    }
}

angular.module('SystemApp').controller('AccountInterestCtrl', AccountInterestCtrl);



