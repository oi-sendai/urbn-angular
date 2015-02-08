SystemApp.factory("CloudFactory", function($rootScope, $q, $http, $firebase) {

  var factory = {};
  var helper = {};
  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  factory.users = function () {
		var endpoint = new Firebase(firebase_url + '/users');
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot);
		});
		return deferred.promise;
  };

  return factory;

});

// SystemApp.factory('UserFactory', function($q) {
// 	var debug = 'users factory';
// 	var factory = {};

// 	factory.fetchUsers = function(){
// 		var deferred = $q.defer();
// 		var users = [

// 			{	"username": "franz-kafka",
// 				"skills": [
// 				{"name":"polite"},
// 				{"name":"javascript"},
// 				{"name":"insurance broker"},
// 				{"name":"design"}
// 				]
// 			},
// 			{	"username":"me",
// 				"skills": [
// 				{"name":"hardworking"},
// 				{"name":"sewing"},
// 				{"name":"javascript"},
// 				{"name":"information architecture"}
// 				]
// 			},
// 			{
// 				"username": "another-user",
// 				"skills": [
// 				{"name":"hardworking"},
// 				{"name":"design"},
// 				{"name":"italian"},
// 				{"name":"javascript"},
// 				]
// 			},
// 			{
// 				"username": "more-data",
// 				"skills": [
// 				{"name":"hardworking"},
// 				{"name":"design"},
// 				]
// 			},
// 			{
// 				"username": "even-more",
// 				"skills": [
// 				{"name":"javascript"},
// 				{"name":"design"},
// 				{"name":"polite"}
// 				]
// 			}
// 		];
// 		deferred.resolve(users);
// 		return deferred.promise;
// 	};
// 	return factory
// }); 
