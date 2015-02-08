'use strict';

// Declare app level module which depends on filters, and services
var SystemApp = angular.module('SystemApp', 
	['ui.router','ngResource','ngAnimate','ui.bootstrap','ngRoute','firebase'
	// ,'AuthCtrl'
	,'HeaderCtrl'
	,'HeaderDirective'
	,'FooterCtrl'
	,'FooterDirective'
	// ,'ProfileCtrl'
	// ,'DreamsCtrl'
	// ,'SkillsCtrl'
	// ,'StatsCtrl'
	,'EditProfileCtrl'
	,'EditSkillsCtrl'
	,'CloudCtrl'
	,'CloudDirective'
		,'MainCtrl'
	// ,'BeerCtrl'
	,'UsersCtrl' 
	]);

SystemApp.factory('_', function() {
	return window._; // assumes underscore has already been loaded on the page
}); 

SystemApp.value('firebase_url', 'https://brilliant-fire-7870.firebaseio.com/'); 

SystemApp.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider ) {
    
	var home = { 
	    name: 'home',  //mandatory
	    templateUrl: 'application/home/home-layout.html',
	};
	var homeLayout = { 
	    name: 'home.layout',  //mandatory
	    url: '/',
	    views:{
            'welcome':{
                templateUrl:'application/home/home-welcome.html',
            },
            'pitch': {
                templateUrl: 'application/home/home-pitch.html',
            }
        }
	};

	var account= { 
	    name: 'account',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	    // controller: 'AuthCtrl',
	    // resolve: {

	    // }
	};
	var accountView = { 
	    name: 'account.edit',  //mandatory
	    url: '/account',
	    views:{
            'dreams':{
                templateUrl:'application/profile/edit-profile-dreams.html',
	    		controller: 'EditProfileCtrl'
                // controller: 'DreamsCtrl'
            },
            'stats':{
            	templateUrl: 'application/profile/edit-profile-stats.html',
	    		controller: 'EditSkillsCtrl'
                // controller: 'StatsCtrl'
            },
            'skills': {
            	templateUrl: 'application/profile/edit-profile-skills.html',
	    		controller: 'EditProfileCtrl'
                // controller: 'SkillsCtrl'
            }
        }
	};

	var profile= { 
	    name: 'profile',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	};

	var profileView = { 
	    name: 'profile.view',  //mandatory
	    url: '/profile/:username', 
	   	resolve: {
	   		user: ['$stateParams','ProfileByUid', function($stateParams, ProfileByUid){
	   			return ProfileByUid($stateParams.username);
	   		}]
	   	} ,
	    views:{
            'dreams':{
                templateUrl:'application/profile/profile-dreams.html',
                controller: 'ProfileCtrl'
            },
            'stats':{
            	templateUrl: 'application/profile/profile-stats.html',
                controller: 'ProfileCtrl'
            },
            'skills': {
            	templateUrl: 'application/profile/profile-skills.html',
                controller: 'ProfileCtrl'
            }
        }
	};
	// #################################################
	// var profileView = { 
	//     name: 'profile.me',  //mandatory
	//     url: '/me', // !! This must be loaded after other routes !!
	//     views:{
 //            'dreams':{
 //                templateUrl:'application/profile/me.html',
 //                controller: 'MeCtrl'
 //            },
 //            'stats':{
 //            	templateUrl: 'application/profile/profile-stats.html',
 //                controller: 'StatsCtrl'
 //            },
 //            'skills': {
 //            	templateUrl: 'application/profile/profile-skills.html',
 //                controller: 'SkillsCtrl'

 //            }
 //        };
      //   var profileView = { 
		    // name: 'profile.franzkafka',  //mandatory
		    // url: '/franzkafka', // !! This must be loaded after other routes !!
		    // views:{
	     //        'dreams':{
	     //            templateUrl:'application/games/taste-test.html',
	     //            controller: 'TasteTest'
	     //        },
	     //        'stats':{
	     //        	templateUrl: 'application/profile/profile-stats.html',
	     //            controller: 'StatsCtrl'
	     //        },
	     //        'skills': {
	     //        	templateUrl: 'application/profile/profile-skills.html',
	     //            controller: 'SkillsCtrl'

	     //        }
      //   };

     //    	var profileView = { 
	    // name: 'profile.view',  //mandatory
	    // url: '/:username', // !! This must be loaded after other routes !!
	    // views:{
     //        'dreams':{
     //            templateUrl:'application/profile/profile-dreams.html',
     //            controller: 'DreamsCtrl'
     //        },
     //        'stats':{
     //        	templateUrl: 'application/profile/profile-stats.html',
     //            controller: 'StatsCtrl'
     //        },
     //        'skills': {
     //        	templateUrl: 'application/profile/profile-skills.html',
     //            controller: 'SkillsCtrl'

     //        }
     //    } ####################################################
     
	// var profileViewExperience = { 
	//     name: 'profile.view.experience',  //mandatory
	//     url: '/experience',
	//     views:{
 //            'dreamsInner':{
 //                templateUrl:'application/profile/tabs/profile-experience.html',
 //                controller: 'DreamsCtrl'
 //            },
 //        }
	// };
	// var profileViewIntroduction = { 
	//     name: 'profile.view.introduction',  //mandatory
	//     url: '/introduction',
	//     views:{
 //            'dreamsInner':{
 //                templateUrl:'application/profile/tabs/profile-introduction.html',
 //                controller: 'DreamsCtrl'
 //            },
 //        }
	// };

	$stateProvider
	  .state(home)
	  .state(homeLayout)
	  // .state(listings)
	  // .state(listingsLayout)
	  // .state(listingsShow)
	  .state(account)
	  .state(accountView)
	  .state(profile)
	  .state(profileView)
	  // .state(profileViewIntroduction)
	  // .state(profileViewExperience)
	;
	$urlRouterProvider.otherwise('/');


}]);

var routeLoadingIndicator = function($rootScope){
  return {
    restrict:'E',
    template:"<h1 ng-if='isRouteLoading'>Loading...</h1>",
    link:function(scope, elem, attrs){
      scope.isRouteLoading = false;

      $rootScope.$on('$routeChangeStart', function(){
        scope.isRouteLoading = true;
      });

      $rootScope.$on('$routeChangeSuccess', function(){
        scope.isRouteLoading = false;
      });
    }
  };
};


SystemApp.factory("AuthFactory", function($rootScope, $q, $http, $firebase) {

  var factory = {};
  var helper = {};
  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  factory.login = function (authClient, email, password) {
  	// console.log(authClient, email, password);
  	authClient.login("password", {
  		email: email, //email: "binarygeometry@gmail.com",
  		password: password, //password: "ZhBDxSXSN4JsL9aU",
  		rememberMe: true
	});//.then(function(user, error) {
 //            console.log("user has email " + user.email);
 //        }, function(error) {
 //            if (error.code = 'INVALID_EMAIL') {
                
 //                alert('email invalid or not signed up');
 //            } else if (error.code = 'INVALID_PASSWORD') {
                
 //                alert('invalid password');
 //            } else {

 //                console.log(error);
 //            } doesnt work
 //        });
 }; 


// // Authenticate users with a custom Firebase token
// ref.authWithCustomToken("<token>", authHandler);
// // Alternatively, authenticate users anonymously
// ref.authAnonymously(authHandler);
// // Or with an email/password combination
// ref.authWithPassword({
// email : 'bobtony@firebase.com',
// password : 'correcthorsebatterystaple'
// }, authHandler);

  factory.getUsers = function () {
		var usersRef = new Firebase(firebase_url + 'users/');
		var deferred = $q.defer();
		var users;

		// Attach an asynchronous callback to read the data at our posts reference
		usersRef.on('value', function (snapshot) {
		  users = snapshot.val();
		  deferred.resolve(users);
		}, function (errorObject) {
		  console.log('The read failed: ' + errorObject.code);
		  deferred.resolve('no data');
		});

        return deferred.promise;
  };

  factory.getProfile = function (username) {
  		// uid = username.foundByFunction
  		var uid = ''//'simplelogin:69'
		var deferred = $q.defer();
		var profile;
		var username = username;
  		factory.getUidByUsername(username).then(function(data){
  			var uid = data;

			var url =  $rootScope.firebase_url + 'users/' + uid;
			var profileRef = new Firebase(url);
			profileRef.on('value', function (snapshot) {
			  profile = snapshot.val();
			  deferred.resolve(profile);
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			  deferred.resolve('no data');
	  		})
		});

        return deferred.promise;
  };
  factory.getUidByUsername = function(username){
  		var username = username;
  		var url = firebase_url + 'listings/' + username;
  		var listings = new Firebase(url);
  		var deferred = $q.defer();
  		listings.on('value', function(snapshot) {
        		var uid = snapshot.val(); // remember the brackets!!
        		// console.log(uid);
          		deferred.resolve('gogo');
        }, function(err){
        	//
        });
        return deferred.promise;


  };
  return factory
});

var MainCtrl = angular.module('MainCtrl',[]);

MainCtrl.controller('MainCtrl', function($rootScope, $scope, $http, $q, $firebase, $location, AuthFactory) {

	$rootScope.firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
	$scope.registerData = {}
	$scope.loginData = {}
	$scope.newUser = false;
	$scope.loggedIn = $scope.loggedIn || false;


// if (authData) {

// console.log("User " + authData.uid + " is logged in with " + authData.provider);
// } else {
// console.log("User is logged out");
// }

	var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
		// Print the current login state whenever it changes
	var ref = new Firebase(firebase_url);


	var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
	  if (error !== null) {
	    // console.log("Error authenticating:", error);
	  } else if (user !== null && $scope.newUser) {
	    console.log("New User is logged in:", user);
	    $scope.loggedIn =true; // set user as logged in
	    $scope.saveNewUser(user); // save user to firebase
	    $scope.newUser = false; // reset new user flag
	    $rootScope.firebaseUser = user.email;
	    $scope.$apply(function() {
	    	$location.path('/list');
		});
	  } else if (user !== null) {
	    console.log("User is logged in:", user);
	    $scope.loggedIn =true; // set user as logged in
	    $rootScope.firebaseUser = user.email;
	    $scope.$apply(function() {
	    	$location.path('/list');
		});

	  }  else if (error) {
	  	// alert(error.message);doesnt work
	  } else {
	    console.log("User is logged out");
	    $scope.loggedIn =false; // set user as logged in
	     $scope.$apply(function() {
	    	$location.path('/register');
		});
	  }
	});
	$scope.change = function(){
		
			    $location.path('/list');
	};
	$scope.login = function(){
		
		var email = $scope.registerData.email;
		var password = $scope.registerData.password;
		AuthFactory.login(authClient, email, password);
		console.log('login');
		// $location.path('/#/list');
	};

	$scope.logout = function(){

		authClient.logout();	
	};

	$scope.register = function(){

		$scope.newUser = true;
		var email = $scope.registerData.email;
		var password = $scope.registerData.password;
		var username = $scope.registerData.username;
		console.log(email, password, username);
		$scope.uniqueUsername(username).then(function(exists){
			if(!exists) {
				console.log('creating new user')
				authClient.createUser(email, password, function(err, user) {
					AuthFactory.login(authClient, email, password);
				});
			} else {
				alert('try to be more original');
			}
		});
	};

	$scope.saveNewUser = function(user){
		var username = $scope.registerData.username;
		ref.child('users').child(user.uid).set({
        	username: username,
        	uid: user.uid
     	});
     	ref.child('listings').child(username).set({
     		uid: user.uid,
        	active: true
     	});
     	console.log('does it end here?');
     	return;
	};

	$scope.uniqueUsername = function(username){
      
        var listings = new Firebase(firebase_url + 'listings');
        var exists = false;
        var deferred = $q.defer();
        listings.child(username).once('value', function(snapshot) {
        		// console.log(snapshot.val);
          		exists = (snapshot.val() !== null);
          		// console.log(exists);
          		deferred.resolve(exists);
        });
        return deferred.promise;
	};

});

var UsersCtrl = angular.module('UsersCtrl',[]);

UsersCtrl.controller('UsersCtrl', function($rootScope, $scope, $http, $q, $firebase, AuthFactory) {
	
	$scope.users = {};
	$scope.profileData = {};

	$scope.getUsers = function(){
		AuthFactory.getUsers().then(function(data){
			// console.log(data);
			$scope.users = data;
		});
	};
	$scope.getUsers();

	$scope.updateProfile = function(){
		var data = $scope.profileData.about|| {};
		var uid = $rootScope.firebaseUser.uid;
		var url =  $rootScope.firebase_url + 'users/' + uid;
		var profile = new Firebase(url);
        // console.log(url, data);
        profile.update({profile: data});
	};
	$scope.getProfile = function(username){
		var username = username;
		AuthFactory.getProfile(username).then(function(data){
			// console.log(data);
			$scope.profile = data;
		});
		// AuthFactory.getUidByUsername(username).then(function(data){
		// 	console.log(data);
		// 	$scope.profile = data;
		// });
	};
	$scope.getProfile('gogo');


});

// var TastedDirective = angular.module('TastedDirective', []);

// TastedDirective
// .directive( 'tasted', function($rootScope,  $q, TastedFactory) {
//     return {
//       	restrict: 'AE',
//      	replace: true,
//       	template: '<input type="checkbox"  ng-model="result" ng-change="tick()" />',
//       	controller: 'TastedController',
//       	scope: {
//        		beer: '@beer',
//        		result: '@result'
//       	},
//       	link: function(scope, elem, attrs) {
//       		var beer = scope.beer;
//       		// scope.result = 'things';
// 			// var test = TastedFactory.result(beer);
// 			TastedFactory.result(beer).then(function(data){
// 				console.log('then',data);
// 				scope.result = data;
// 			});
// 			// console.log(test);
//       	}
//     }
// })
// .controller( 'TastedController', function($rootScope, $scope, $q, $firebase){
// 	// console.log('beer',$scope.beer);
// 	$scope.tick = function(){
// 		var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
// 		var tasted = $scope.result;
// 		var beerID = $scope.beer;
// 		var currentUser = $rootScope.firebaseUser.uid;
// 		var dataObject = { tasted: tasted }; // a mocked out data object   
// 		console.log('tasted',$scope.result);
// 		console.log('beer',$scope.result);
// 		var endpoint = new Firebase(firebase_url + 'tasting/' + currentUser + '/' + beerID);
// 		var sync = $firebase(endpoint);
// 		endpoint.set(dataObject);


// 	}
// 		// var tasted = tasted;
// 	// 	console.log(beerID, dataObject, currentUser, endpointUrl);
// 	// }
// });

// App.factory("TastedFactory", function($rootScope, $q, $http, $firebase) {

//   var factory = {};
//   var helper = {};
//   var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

//   factory.result = function (beerID) {
// 		var currentUser = $rootScope.firebaseUser.uid;
// 		var endpoint = new Firebase(firebase_url + 'tasting/' + currentUser + '/' + beerID);
// 		var deferred = $q.defer();
// 		// console.log(beerID);
				
// 		endpoint.once('value', function(snapshot){
// 			// console.log(snapshot.val());
// 			var foo = snapshot.val() || false;
// 			if(foo.tasted){
// 				console.log('tasted');
// 				deferred.resolve(true);
// 			} 
// 			else {
// 				console.log('not tasted');
// 				deferred.resolve(false);
// 			}
// 			// console.log(beerID);
// 		});
		
// 		return deferred.promise;
//   };

//   return factory;

// });


// var BeerCtrl = angular.module('BeerCtrl');//, ['TastedDirective']);

// BeerCtrl.controller('BeerCtrl', function($rootScope, $scope, $http, $q, $routeParams, $firebase) {
// 	$scope.beer = $routeParams.beerID || false;
// 	$scope.editing = false;
// 	$scope.beerData = {};
// 	$scope.ales = 'ales';

// 	var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';


// 		var beersRef       = new Firebase(firebase_url + 'beers/');
// 		var sync = $firebase(beersRef);
// 		$scope.beers = sync.$asArray();


// 		// var syncObject = sync.$asObject();
// 		// syncObject.$bindTo($scope, 'beers');




// 	$scope.newBeer = function(){
// 		var beerObject     = {};
// 		var beersRef       = new Firebase(firebase_url + 'beers/');
// 		beerObject.name    = $scope.beerData.name;
// 		beerObject.brewery = $scope.beerData.brewery;
// 		beerObject.notes   = $scope.beerData.notes;
// 		beerObject.abv     = $scope.beerData.abv;
// 		beerObject.price   = $scope.beerData.price;
// 		// console.log(beerObject);
// 		// $scope.messages.$add({text: text});
// 		// beersRef.push(beerObject);
// 		$scope.beers.$add(beerObject);
// 	}
// 	$scope.showBeer = function(beer){
// 		if(beer){		
// 			var beerObject     = {};
// 			var beersRef       = new Firebase(firebase_url + 'beers/'+ beer);
// 			beersRef.on("value", function (snapshot) {
// 				// console.log(snapshot.val());
// 				$scope.ale = snapshot.val();
// 				// $scope.$apply();
// 			});
// 		}
// 	}
// 	$scope.showBeer($scope.beer );

// 	$scope.beersuiouoi = [
// 	{
// 	name:'Stag',  
// 	brewery:'Cairngorm Brewery',
// 	notes:'Mahogany coloured with medium to light body, initial bitterness that is balanced by a soft finish from the roasted malts.', 
// 	abv:'4.1',
// 	price:'2.50'	     
// 	},	
// 	{	
// 	name:'Wildcat', 
// 	brewery:'Cairngorm Brewery',
// 	notes:'A deep amber coloured ale with a complex malty, fruit flavour and delicate bitterness. Strong and distinctive.',
// 	abv:'5.1',
// 	price:'2.65'
// 	},
// 	{
// 	name:'Organic Blonde', 
// 	brewery:'Black Isle',
// 	notes:'A premium quality continental style lager beer. Pale yellow, with a light biscuit palate and a fresh grassy aroma.',
// 	abv:'4.5',
// 	price:'3.05'	
// 	},
// 	{
// 	name:'Porter',
// 	brewery:'Black Isle',
// 	notes:'A rich medium dry ruby-black beer. Excellent with oysters and crab or with mature farmhouse cheddar and oatcakes.',
// 	abv:'4.5',
// 	price:'3.05'	
// 	},
// 	{
// 	name:'Arran Blonde', 
// 	brewery:'Arran',
// 	notes:'Champion Wheat Beer of Britain 2003. Floral hop & new mown grass aroma, citrus fruit with a good hop character. A pale golden beer, clear tasting in a continental style.',
// 	abv:'5.0',
// 	price:'2.85'
// 	},

// 	{
// 	name:'Arran Red Squirrel',  
// 	brewery:'Arran',
// 	notes:'It is the perfect "session beer" a well balanced malty, hop blend.',
// 	abv:'3.9',
// 	price:'2.90'	
// 	}
// 	]
// });

