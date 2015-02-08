SystemApp.factory("ProfileFactory", ['$q','$firebase', function($q, $firebase) {

	var factory = {};
	var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

	factory.getUid = function(username) {
			var endpoint = new Firebase(firebase_url + 'listings/' + username);
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot.val());
		}, function (err) {
			deferred.resolve('error');
		});
		return deferred.promise;
	}

	factory.getUser = function (uid) {
		var endpoint = new Firebase(firebase_url + '/users/' + uid);
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot.val());
		}, function (err) {
			deferred.resolve('error');
		});
		return deferred.promise;
	};

    factory.Messages = function (uid) {
    	return 'under development'
  	};

  	return factory;

}]);

SystemApp.factory("ProfileByUid", function($q, $stateParams, ProfileFactory) {
	/*
	// accepts $stateParams.username as input
	*/
	var ProfileByUid = function(username){

		var defer = $q.defer();
		ProfileFactory.getUid(username).then(function(params){
			if(params !== 'error'){
				if( params.active ) {
					ProfileFactory.getUser(params.uid).then(function(user){
						if(user !== 'error'){
							defer.resolve(user);
						} else {
							defer.resolve({username:'error'})
						}
					});
				}
				else {
					defer.resolve({username:'This account is currently inactive'});
				}
			} 
			else {
				defer.resolve({username:'error'})
			}
		});
		return defer.promise
	}
	return ProfileByUid

});