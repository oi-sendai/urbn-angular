// var AuthCtrlSystem = angular.module('AuthCtrlSystem', ['ngRoute','firebase']);

// AuthCtrlSystem.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

//   $scope.items = ['item1', 'item2', 'item3'];

//   $scope.open = function (size) {

//     var modalInstance = $modal.open({
//       templateUrl: 'application/system/auth/auth-modal.html',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };
// });

// AuthCtrlSystem.controller('ModalInstanceCtrl', function ($rootScope, $scope, $modalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };
//   $rootScope.$on('someEvent', function(event, args) {

//     $modalInstance.close($scope.selected.item);
    
//   });
//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });


AuthCtrl = angular.module('AuthCtrl', ['ngRoute','firebase']);
AuthCtrl.controller('AuthCtrl', function($rootScope, $scope, $http, $q, $firebase, $location
  ,AuthFactory
  // ,authClient
  ) {

  $rootScope.firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
  $scope.registerData = {}
  $scope.loginData = {}
  $scope.newUser = false;

  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
    // Print the current login state whenever it changes
  var ref = new Firebase(firebase_url);

  var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
    if (error !== null) {
      // console.log("Error authenticating:", error);
    } else if (user !== null && $scope.newUser) {
      console.log("New User is logged in:", user);
      $scope.saveNewUser(user); // save user to firebase
      $scope.newUser = false; // reset new user flag
      $rootScope.firebaseUser = user;
     //  $scope.$apply(function() {
     //    // $location.path('/list');
      // });
    } else if (user !== null) {
      console.log("User is logged in:", user);
      $rootScope.firebaseUser = user;
     //  $scope.$apply(function() {
      //     // $location.path('/list');
      // });

    } else {
      console.log("User is logged out");
     //   $scope.$apply(function() {
     //    // $location.path('/register');
      // });
    }
    });

  // $scope.change = function(){
    
  //         $location.path('/list');
  // };
  // $scope.login = function(){
    
  //   var email = $scope.registerData.email;
  //   var password = $scope.registerData.password;
  //   AuthFactory.login(authClient, email, password);
  //   console.log('login');
  //   // $location.path('/#/list');
  // };

  // $scope.logout = function(){

  //   authClient.logout();  
  // };

  // $scope.register = function(){

  //   $scope.newUser = true;
  //   var email = $scope.registerData.email;
  //   var password = $scope.registerData.password;
  //   var username = $scope.registerData.username;
  //   $scope.uniqueUsername(username).then(function(exists){
  //     if(!exists) {
  //       console.log('creating new user')
  //       authClient.createUser(email, password, function(err, user) {
  //         AuthFactory.login(authClient, email, password);
  //       });
  //     } else {
  //       alert('try to be more original');
  //     }
  //   });
  // };

  // $scope.saveNewUser = function(user){
  //   var username = $scope.registerData.username;
  //   ref.child('users').child(user.uid).set({
  //         username: username,
  //         uid: user.uid
  //     });
  //     ref.child('listings').child(username).set({
  //       uid: user.uid,
  //         active: true
  //     });
  //     console.log('does it end here?');
  //     return;
  // };

  // $scope.uniqueUsername = function(username){
      
  //       var listings = new Firebase(firebase_url + 'listings');
  //       var exists = false;
  //       var deferred = $q.defer();
  //       listings.child(username).once('value', function(snapshot) {
  //           // console.log(snapshot.val);
  //             exists = (snapshot.val() !== null);
  //             // console.log(exists);
  //             deferred.resolve(exists);
  //       });
  //       return deferred.promise;
  // };

});

// AuthCtrlSystem.controller('UsersCtrl', function($rootScope, $scope, $http, $q, $firebase, AuthFactory) {
  
//   $scope.users = {};
//   $scope.profileData = {};

//   $scope.getUsers = function(){
//     AuthFactory.getUsers().then(function(data){
//       // console.log(data);
//       $scope.users = data;
//     });
//   };
//   $scope.getUsers();

//   $scope.updateProfile = function(){
//     var data = $scope.profileData.about|| {};
//     var uid = $rootScope.firebaseUser.uid;
//     var url =  $rootScope.firebase_url + 'users/' + uid;
//     var profile = new Firebase(url);
//         // console.log(url, data);
//         profile.update({profile: data});
//   };
//   $scope.getProfile = function(username){
//     var username = username;
//     AuthFactory.getProfile(username).then(function(data){
//       // console.log(data);
//       $scope.profile = data;
//     });
//     // AuthFactory.getUidByUsername(username).then(function(data){
//     //  console.log(data);
//     //  $scope.profile = data;
//     // });
//   };
//   $scope.getProfile('gogo');


// });





