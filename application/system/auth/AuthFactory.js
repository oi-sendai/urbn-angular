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
  	})
  };

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

// SystemApp.service("authClient", function($rootScope, $q, $http, $firebase) {
// 	var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
//     // Print the current login state whenever it changes
//  	var ref = new Firebase(firebase_url);

// 	var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
// 		if (error !== null) {
// 		  // console.log("Error authenticating:", error);
// 		} else if (user !== null && $scope.newUser) {
// 		  console.log("New User is logged in:", user);
// 		  $scope.saveNewUser(user); // save user to firebase
// 		  $scope.newUser = false; // reset new user flag
// 		  $rootScope.firebaseUser = user;
// 		 //  $scope.$apply(function() {
// 		 //    // $location.path('/list');
// 			// });
// 		} else if (user !== null) {
// 		  console.log("User is logged in:", user);
// 		  $rootScope.firebaseUser = user;
// 		 //  $scope.$apply(function() {
// 			//     // $location.path('/list');
// 			// });

// 		} else {
// 		  console.log("User is logged out");
// 		 //   $scope.$apply(function() {
// 		 //    // $location.path('/register');
// 			// });
// 		}
// 	  });
// 	return authClient
// });

// SystemApp.factory("AuthFactory", function($rootScope, $q, $http, $firebase) {

//   var factory = {};
//   var helper = {};
//   var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  // factory.getProfile = function (username) {
  //     // uid = username.foundByFunction
  //   var uid = ''//'simplelogin:69'
  //   var deferred = $q.defer();
  //   var profile;
  //   var username = username;
  //     factory.getUidByUsername(username).then(function(data){
  //       var uid = data;

  //     var url =  $rootScope.firebase_url + 'users/' + uid;
  //     var profileRef = new Firebase(url);
  //     profileRef.on('value', function (snapshot) {
  //       profile = snapshot.val();
  //       deferred.resolve(profile);
  //     }, function (errorObject) {
  //       console.log('The read failed: ' + errorObject.code);
  //       deferred.resolve('no data');
  //       })
  //   });

  //       return deferred.promise;
  // };
  

//   return factory
// });