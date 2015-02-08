var DreamsCtrl = angular.module('DreamsCtrl', ['ngAnimate']);

DreamsCtrl.controller('DreamsCtrl', ['$scope','$stateParams', function($scope,$stateParams) {

	$scope.username = $stateParams.username;

  	$scope.user ={
		'name': 'Franz Kafka',
		'coverletter': '<h3>I want to cut patterns</h3><p>Or something. Designing and manufacturing clothes is what I do best and it is what I love to do. I only have the experience I have given myself so I do not expect to be put in the design department from day one.</p>',
		'cv': '<h3>A wisywig object</p>'
	}, 
	$scope.me ={
		'name': 'I want to cut patterns',
		'coverletter': '<h3>I want to cut patterns</h3><p>Or something. Designing and manufacturing clothes is what I do best and it is what I love to do. I only have the experience I have given myself so I do not expect to be put in the design department from day one.</p>',
		'cv': '<h3>A wisywig object</p>'
	},
	$scope.girl ={
		'name': 'Franz Kafka',
		'coverletter': '<h3>I want to cut patterns</h3><p>Or something. Designing and manufacturing clothes is what I do best and it is what I love to do. I only have the experience I have given myself so I do not expect to be put in the design department from day one.</p>',
		'cv': '<h3>A wisywig object</p>'
	} 
}]);

