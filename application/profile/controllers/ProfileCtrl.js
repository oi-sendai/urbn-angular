/*
 *@ProfileCtrl
*/
function ProfileCtrl ($scope, $stateParams, user, AccountFactory) {	
	$scope.user = user;
	$scope.uid 	= user.uid;
	$scope.username = user.username;
	$scope.profile = user.profile;
	// $scope.interests = _.map(user.skills);

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
}

angular.module('SystemApp').controller('ProfileCtrl', ProfileCtrl);




