var SkillsCtrl = angular.module('SkillsCtrl', []);

SkillsCtrl.controller('SkillsCtrl', ['$scope','$stateParams', function($scope,$stateParams) {
	$scope.username = $stateParams.username;
	$scope.skills = [
	  	{ 
	  		'text'  :'sewing',
	  	    'size':3
	  	},
	  	{ 
	  		'text'  : 'pattern design',
	  	    'size':5
	  	},
	  	{ 
	  		'text' : 'machine sewing',
	  	    'size'  :8
	  	},
	  	{ 
	  		'text' : 'cutting',
	  	    'size'  : 1
	  	}
	];

}]);

