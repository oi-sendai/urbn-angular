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

    factory.interests = function () {
		var currentUser = $rootScope.firebaseUser.uid;
		var endpoint = new Firebase(firebase_url + 'users/' + currentUser +'/skills/');
		var deferred = $q.defer();
		// console.log(beerID);
				
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot);
		});
		
		return deferred.promise;
  	};


    factory.addInterest = function (interest) {
		var currentUser = $rootScope.firebaseUser.uid;
		// var endpoint = new Firebase(firebase_url + 'users/' + currentUser + '/skills/');
		// var deferred = $q.defer();
		console.log('interest', interest);
		// console.log('c',currentUser);
				
		var interestRef = new Firebase(firebase_url + 'users/' + currentUser + '/skills/');
		console.log(interestRef)
		var newInterestRef = interestRef.push();
		newInterestRef.set(interest);
		// We've appended a new message to the message_list location.
		// var path = newMessageRef.toString();
		// path will be something like
		// 'https://samplechat.firebaseio-demo.com/message_list/-IKo28nwJLH0Nc5XeFmj'
				
		// return deferred.promise;
  	};

  return factory;

});