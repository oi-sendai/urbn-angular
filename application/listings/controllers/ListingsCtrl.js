var ListingsCtrl = angular.module('ListingsCtrl', ['CloudDirective']);

ListingsCtrl.controller('ListingsCtrl', ['$scope','$stateParams', function($scope, $stateParams) {

	$scope.currentListing = $stateParams.listing_id || 'Please select a listing';
	$scope.currentBool = $stateParams.listing_id || false;

	$scope.listings = [
		{	'username': 'me',
			'profile' : {
				'cv' : 'cv content',
				'cover' : 'cover-content'
			}
		},
		{	'username': 'Franz Kafka',
			'profile' : {
				'cv' : 'cv content',
				'cover' : 'cover-content'
			}
		},
		{	'username': 'i-want-to-cut-patterns',
			'profile' : {
				'cv' : 'cv content',
				'cover' : 'cover-content'
			}
		},
	];
  //   $scope.wordsuiouo= [
  //     { 
  //       'text'  :'sewing',
  //         'weight': 3
  //     },
  //     { 
  //       'text'  : 'pattern design',
  //         'weight': 5
  //     },
  //     { 
  //       'text' : 'machine sewing',
  //         'cat'  : 8
  //     },
  //     { 
  //       'text' : 'cutting',
  //         'cat'  : 1
  //     }
  // ];
      $scope.words = [
          {word: "Lorem", size: 15},
          {word: "Ipsum", size: 9}, //link: "http://jquery.com/"},
          {word: "Dolor", size: 6}, //html: {title: "I can haz any html attribute"}},
          {word: "Sit", size: 7},
          {word: "Amet", size: 5}
          // ...as many words as you want
      ];

      // $scope.test = ['oNe','tw','thiNJDFNfdj','dsNKDFNsdh','jkNKNKkajf'];

      $(function() {
        // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
       
      });
	
}]);

