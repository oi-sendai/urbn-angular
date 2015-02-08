var EditSkillsCtrl = angular.module('EditSkillsCtrl', []);

EditSkillsCtrl.controller('EditSkillsCtrl', function($rootScope, $scope, $http, $q, $routeParams, $firebase
    ,AccountFactory
    ) {
    // $scope.beer = $routeParams.beerID || false;
    // $scope.editing = false;
    // $scope.beerData = {};
    // $scope.ales = 'ales';
    $scope.profile = {}
    $scope.profile.info = 'Talk about yourself';

    var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

    $scope.init = function(){
        console.log('init', $rootScope.firebaseUser)
        // var user = $rootScope.firebaseUser;
        AccountFactory.skills().then(function(data){
            console.log('dat', data.val());
            var skills =  data.val();
            skills = _.map(skills, function(value,key){
                return value
            });
            $scope.skills = skills;
        });
        // $scope.username = user.username;
        // console.log(user)
    }
    $scope.init();



    $scope.formData = {};

    $scope.skillData = {};

    $scope.editswitch =  false;


    $scope.updateInfo = function(){
        console.log('working');
        var info = $scope.profile.info; 
        AccountFactory.updateInfo(info);
    }
    $scope.addSkill = function(){
        var newSkill = {"name":$scope.skillData.newItem, "tooltip":""};
        $scope.skills.push(newSkill);
        AccountFactory.addSkill(newSkill);
        $scope.skillData = {}
    }



    // var profileRef = new Firebase(firebase_url + 'profile/');
    //     var sync = $firebase(profileRef);
    //     $scope.beers = sync.$asArray();


    //     // var syncObject = sync.$asObject();
    //     // syncObject.$bindTo($scope, 'beers');




    // $scope.newProfile = function(){
    //     var beerObject     = {};
    //     var beersRef       = new Firebase(firebase_url + 'beers/');
    //     beerObject.name    = $scope.beerData.name;
    //     beerObject.brewery = $scope.beerData.brewery;
    //     beerObject.notes   = $scope.beerData.notes;
    //     beerObject.abv     = $scope.beerData.abv;
    //     beerObject.price   = $scope.beerData.price;
    //     // console.log(beerObject);
    //     // $scope.messages.$add({text: text});
    //     // beersRef.push(beerObject);
    //     $scope.beers.$add(beerObject);
    // }
    // $scope.showBeer = function(beer){
    //     if(beer){       
    //         var beerObject     = {};
    //         var beersRef       = new Firebase(firebase_url + 'beers/'+ beer);
    //         beersRef.on("value", function (snapshot) {
    //             // console.log(snapshot.val());
    //             $scope.ale = snapshot.val();
    //             // $scope.$apply();
    //         });
    //     }
    // }
    // $scope.showBeer($scope.beer );

});