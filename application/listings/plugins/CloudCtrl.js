CloudCtrl = angular.module('CloudCtrl', []);

CloudCtrl.controller('CloudCtrl', function($scope, _
	// ,UserFactory
	,CloudFactory
	){
	// $scope.keepArray = false; //{skill:'',value:'0'}
	$scope.debug = 'CloudCtrl';


	// if word inArray is truthy push array to array

	// $scope.activeFilters = [];

	$scope.users = [];
	$scope.activeUsers = []
	$scope.skills = [];
	$scope.filters = [];
	// test 1
	$scope.init = function(){
		CloudFactory.users().then(function(data){
			$scope.users = data.val(); // cache users object
			console.log('--------------users', data.val());
			$scope.gatherSkills(data.val());
		});
	};
	$scope.init();

	// returns array of skill object values
	$scope.gatherSkills = function(users){
		console.log(users)
		// if($scope.filters.length < 0){
		// 	console.log('filterUsers()');
		// } 
		console.log('called');
		$scope.skills = [];
		var gather = function(user){
			var skills = _.map(user.skills, function(value,key){
                return value
            })

            console.log(skills);
			_.each(skills, function(input){
				$scope.countSkills(input.name);
			});
			// console.log($scope.skills);
		}
		_.each(users, gather);
	};

	// Checks to see if the skill exists
	// if false adds the skill to the array
	// if true increments the counter for the skill
	$scope.countSkills = function(input){ 
		var existingSkill = _.contains(_.pluck($scope.skills, 'text'), input);
		var filteredSkill = _.contains($scope.filters, input);

		if(!existingSkill && !filteredSkill){ // 
			var thing = {
				text: input, 
				weight: 1, 
				link: { href: "#", title: input}
			}

			$scope.skills.push(thing);
		}
		else if(!filteredSkill){ // really inefficient i think 
			_.select($scope.skills, function(obj){

			    if (obj.text === input){
			    	obj.weight = ++obj.weight;
			    }; 
					    
			});

		}
	};

	$scope.addFilter = function(filter){
		$scope.filters.push(filter); 
		// console.log('1',$scope.filters);
		$scope.filterUsers($scope.filters);
	}
	$scope.removeFilter = function(filter){
		$scope.filters = _.without($scope.filters, filter);
		// console.log($scope.filters)
		$scope.filterUsers($scope.filters);
		
	}
	$scope.filterUsers = function(filters){
		var users = $scope.users ;
		var result = [];
		
		var numberOfFilters = filters.length;
		// console.log('numberOfFilters',numberOfFilters)
		
		// iterate over user
		_.each(users, function(user){
			// console.log('---------------', user, '------------------')
			var hasSkill = 0; // set skills to zero
			// iterate over skills array	
			_.each(user.skills, function(skill){
				// console.log('4',skill.name)
				// if(_.contains(filters, skill.name)){
				if(_.contains(filters, skill.name)){
					hasSkill = ++hasSkill
					// console.log('true', hasSkill);
				}
			});
			if(hasSkill === numberOfFilters){
					result.push(user)
			}
		})
		$scope.activeUsers = result;
		// console.log('6', $scope.activeUsers)
		$scope.gatherSkills(result);
	}

  
});
