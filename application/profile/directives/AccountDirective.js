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


SystemApp.factory("AccountFactory", function($rootScope, $q, $http, $firebase) {

  var factory = {};
  var helper = {};
  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  factory.result = function (beerID) {
		var currentUser = $rootScope.firebaseUser.uid;
		var endpoint = new Firebase(firebase_url + 'tasting/' + currentUser + '/' + beerID);
		var deferred = $q.defer();
		// console.log(beerID);
				
		endpoint.once('value', function(snapshot){
			// console.log(snapshot.val());
			var foo = snapshot.val() || false;
			if(foo.tasted){
				console.log('tasted');
				deferred.resolve(true);
			} 
			else {
				console.log('not tasted');
				deferred.resolve(false);
			}
			// console.log(beerID);
		});
		
		return deferred.promise;
  };
  factory.user = function () {
		var currentUser = $rootScope.firebaseUser.uid;
		var endpoint = new Firebase(firebase_url + 'users/' + currentUser);
		var deferred = $q.defer();
		// console.log(beerID);
				
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot);
		});
		
		return deferred.promise;
  };

    factory.skills = function () {
		var currentUser = $rootScope.firebaseUser.uid;
		var endpoint = new Firebase(firebase_url + 'users/' + currentUser +'/skills/');
		var deferred = $q.defer();
		// console.log(beerID);
				
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot);
		});
		
		return deferred.promise;
  };

  factory.updateInfo = function (info) {
		var currentUser = $rootScope.firebaseUser.uid;
		var endpoint = new Firebase(firebase_url + 'users/' + currentUser + '/profile/');
		var deferred = $q.defer();
		console.log(info);
				
		endpoint.update({
			info: info,
		});
		
		return deferred.promise;
  };

    factory.addSkill = function (skill) {
		var currentUser = $rootScope.firebaseUser.uid;
		// var endpoint = new Firebase(firebase_url + 'users/' + currentUser + '/skills/');
		// var deferred = $q.defer();
		console.log('skill',skill);
		console.log('c',currentUser);
				
		var skillRef = new Firebase(firebase_url + 'users/' + currentUser + '/skills/');
		console.log(skillRef)
		var newSkillRef = skillRef.push();
		newSkillRef.set(skill);
		// We've appended a new message to the message_list location.
		// var path = newMessageRef.toString();
		// path will be something like
		// 'https://samplechat.firebaseio-demo.com/message_list/-IKo28nwJLH0Nc5XeFmj'
				
		// return deferred.promise;
  	};

  return factory;

});
