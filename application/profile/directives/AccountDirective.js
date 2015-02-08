var AccountsDirective = angular.module('AccountsDirective', []);

AccountsDirective
.directive( 'tasted', function($rootScope,  $q, TastedFactory) {
    return {
      	restrict: 'AE',
     	replace: true,
      	template: '<input type="checkbox"  ng-model="result" ng-change="tick()" />',
      	controller: 'TastedController',
      	scope: {
       		beer: '@beer',
       		result: '@result'
      	},
      	link: function(scope, elem, attrs) {
      		var beer = scope.beer;
      		// scope.result = 'things';
			// var test = TastedFactory.result(beer);
			TastedFactory.result(beer).then(function(data){
				console.log('then',data);
				scope.result = data;
			});
			// console.log(test);
      	}
    }
})
.controller( 'AccountsController', function($rootScope, $scope, $q, $firebase){
	// console.log('beer',$scope.beer);
	$scope.tick = function(){
		var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
		var tasted = $scope.result;
		var beerID = $scope.beer;
		var currentUser = $rootScope.firebaseUser.uid;
		var dataObject = { tasted: tasted }; // a mocked out data object   
		console.log('tasted',$scope.result);
		console.log('beer',$scope.result);
		var endpoint = new Firebase(firebase_url + 'tasting/' + currentUser + '/' + beerID);
		var sync = $firebase(endpoint);
		endpoint.set(dataObject);


	}
		// var tasted = tasted;
	// 	console.log(beerID, dataObject, currentUser, endpointUrl);
	// }
});


