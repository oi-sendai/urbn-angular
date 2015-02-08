SystemApp.run(['$rootScope', function($rootScope) {
		console.log('initroot')
		$rootScope.$on('$stateChangeStart', function(e, curr, prev) { 
			// if (curr.$$route && curr.$$route.resolve) {
				// Show a loading message until promises are not resolved
				$rootScope.isRouteLoading = true;
				console.log('on')
			// }
		});
		$rootScope.$on('$stateChangeSuccess', function(e, curr, prev) { 
			// Hide loading message
			$rootScope.isRouteLoading = false;
			console.log('off')
		});
		// $rootScope.$on('$stateChangeError', 
		// function(event, toState, toParams, fromState, fromParams, error){ ... 
		// })
}]);