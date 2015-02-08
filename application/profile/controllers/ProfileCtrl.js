/*
 *@ProfileCtrl
*/
function ProfileCtrl ($scope, $stateParams, user) {	
	$scope.user = user;
	$scope.uid 	= user.uid;
	$scope.username = user.username;
	$scope.profile = user.profile;
	$scope.skills = _.map(user.skills);
}

angular.module('SystemApp').controller('ProfileCtrl', ProfileCtrl);




