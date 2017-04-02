(function(){
	'use strict';

	angular
		.module('myapp')
		.config(routerConfig);

	/*@ngInject*/
	function routerConfig($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/home',
		        templateUrl: 'views/main/main.html',
		        controller: 'MainController',
		        controllerAs: 'main'
			});
		$urlRouterProvider.otherwise('/home');	
	}	

})();