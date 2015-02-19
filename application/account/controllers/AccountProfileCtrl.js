/*
 *@AccountProfileCtrl 
*/
function AccountProfileCtrl ($scope, $stateParams, user, AccountFactory) { 
    $scope.user = user;
    $scope.uid  = user.uid;
    $scope.username = user.username;
    $scope.profile = user.profile;
    // console.log(_.map(user.skills));
    // $scope.interests = _.map(user.skills);

    // var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

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

    $scope.updateInfo = function(){
        alert('working');
        var postData = {};
        postData.info     = $scope.profile.info; 
        postData.location = $scope.profile.location; 
        // postData.info = $scope.profile.info; 
        // postData.info = $scope.profile.info; 
        AccountFactory.updateInfo(postData);
    }

}

angular.module('SystemApp').controller('AccountProfileCtrl', AccountProfileCtrl);


